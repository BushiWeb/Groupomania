import { jest } from '@jest/globals';
import { AxiosError } from 'axios';

jest.unstable_mockModule('axios', () => ({
    __esModule: true,
    default: jest.fn(),
}));

const { default: axios } = await import('axios');
const { default: apiRequest } = await import('./apiRequest.js');

const path = '/test/',
    method = 'post',
    requestData = {
        string: 'Hello world',
        interger: 3,
    },
    contentType = 'application/json',
    accessToken = '123',
    refreshToken = '456',
    returnedData = {
        data: {
            string: 'salut, monde',
            integer: 7,
        },
    },
    newAccessToken = '789',
    newRefreshToken = '101112',
    genericError = new AxiosError('Error'),
    authenticationError = new AxiosError(
        'Authentication error',
        AxiosError.ERR_BAD_RESPONSE,
        {},
        {},
        {
            status: 401,
            data: {
                error: {
                    type: 'AuthenticationError',
                },
            },
        },
    );

afterEach(() => {
    axios.mockReset();
});

describe('apiRequest service test suite', () => {
    it('should create the request with the data and the access token and return the data', async () => {
        axios.mockReturnValueOnce(returnedData);
        const result = await apiRequest({
            path,
            method,
            requestData,
            contentType,
            accessToken,
            refreshToken,
        });
        expect(result).toEqual(returnedData);
        expect(axios).toHaveBeenCalledTimes(1);
        expect(axios).toHaveBeenCalledWith({
            url: path,
            method: method,
            data: requestData,
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': contentType,
            },
        });
    });

    it('should create the request with no data and return the data', async () => {
        axios.mockReturnValueOnce(returnedData);
        const result = await apiRequest({
            path,
            method,
            accessToken,
            refreshToken,
        });
        expect(result).toEqual(returnedData);
        expect(axios).toHaveBeenCalledTimes(1);
        expect(axios).toHaveBeenCalledWith({
            url: path,
            method: method,
            data: null,
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': null,
            },
        });
    });

    it('should create the request with the refresh token and return the data', async () => {
        axios.mockReturnValueOnce(returnedData);
        const result = await apiRequest({
            path,
            method,
            requestData,
            contentType,
            refreshToken,
        });
        expect(result).toEqual(returnedData);
        expect(axios).toHaveBeenCalledTimes(1);
        expect(axios).toHaveBeenCalledWith({
            url: path,
            method: method,
            data: requestData,
            headers: {
                Authorization: `Bearer ${refreshToken}`,
                'Content-Type': contentType,
            },
        });
    });

    it('should create the request with no token and return the data', async () => {
        axios.mockReturnValueOnce(returnedData);
        const result = await apiRequest({
            path,
            method,
            requestData,
            contentType,
        });
        expect(result).toEqual(returnedData);
        expect(axios).toHaveBeenCalledTimes(1);
        expect(axios).toHaveBeenCalledWith({
            url: path,
            method: method,
            data: requestData,
            headers: {
                Authorization: null,
                'Content-Type': contentType,
            },
        });
    });

    it('should return an error if the request fails', async () => {
        axios.mockImplementationOnce(() => {
            throw genericError;
        });
        const result = await apiRequest({
            path,
            method,
            requestData,
            contentType,
        });
        expect(result).toEqual({
            error: genericError,
        });
        expect(axios).toHaveBeenCalledTimes(1);
    });

    it('should return an error if the authentication fails but there is no access token', async () => {
        axios.mockImplementationOnce(() => {
            throw authenticationError;
        });
        const result = await apiRequest({
            path,
            method,
            requestData,
            contentType,
            refreshToken,
        });
        expect(result).toEqual({
            error: authenticationError,
        });
        expect(axios).toHaveBeenCalledTimes(1);
    });

    it('should return an error if the authentication fails but there is no refresh token', async () => {
        axios.mockImplementationOnce(() => {
            throw authenticationError;
        });
        const result = await apiRequest({
            path,
            method,
            requestData,
            contentType,
            accessToken,
        });
        expect(result).toEqual({
            error: authenticationError,
        });
        expect(axios).toHaveBeenCalledTimes(1);
    });

    it('should refresh the tokens and return the data and the new tokens after the second try', async () => {
        axios
            .mockImplementationOnce(() => {
                throw authenticationError;
            })
            .mockReturnValueOnce({
                data: {
                    refreshToken: newRefreshToken,
                    accessToken: newAccessToken,
                },
            })
            .mockReturnValueOnce(returnedData);
        const result = await apiRequest({
            path,
            method,
            requestData,
            contentType,
            refreshToken,
            accessToken,
        });
        expect(result).toEqual({
            data: returnedData.data,
            refreshedTokens: {
                refreshToken: newRefreshToken,
                accessToken: newAccessToken,
            },
        });
        expect(axios).toHaveBeenCalledTimes(3);
    });

    it('should refresh the tokens and return the tokens and the error if the second try fails', async () => {
        axios
            .mockImplementationOnce(() => {
                throw authenticationError;
            })
            .mockReturnValueOnce({
                data: {
                    refreshToken: newRefreshToken,
                    accessToken: newAccessToken,
                },
            })
            .mockImplementationOnce(() => {
                throw authenticationError;
            });
        const result = await apiRequest({
            path,
            method,
            requestData,
            contentType,
            refreshToken,
            accessToken,
        });
        expect(result).toEqual({
            error: authenticationError,
            refreshedTokens: {
                refreshToken: newRefreshToken,
                accessToken: newAccessToken,
            },
        });
        expect(axios).toHaveBeenCalledTimes(3);
    });

    it('should return the error if the refresh fails', async () => {
        axios
            .mockImplementationOnce(() => {
                throw authenticationError;
            })
            .mockImplementationOnce(() => {
                throw genericError;
            });
        const result = await apiRequest({
            path,
            method,
            requestData,
            contentType,
            refreshToken,
            accessToken,
        });
        expect(result).toEqual({
            error: genericError,
        });
        expect(axios).toHaveBeenCalledTimes(2);
    });
});
