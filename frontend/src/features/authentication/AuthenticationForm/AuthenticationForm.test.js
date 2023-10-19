import AuthenticationForm from './AuthenticationForm.jsx';
import { screen, waitFor } from '@testing-library/react';
import { render } from '../../../utils/tests/test-wrapper.js';
import userEvent from '../../../utils/tests/user-event.js';
import { ERROR_MESSAGES } from './request.js';
import '@testing-library/jest-dom';

beforeEach(() => {
    sessionStorage.clear();
});

describe('AuthenticationForm component test suite', () => {
    const email = 'test@email.com';
    const password = 'aaaAAA111@@@';

    it('should render', () => {
        render(<AuthenticationForm/>);
        screen.getByRole('form', { name: 'Formulaire d\'inscription et de connection' });
    });

    it('should check for empty fields on signup', async () => {
        const user = userEvent.setup();
        render(<AuthenticationForm/>);
        const signupButton = screen.getByRole('button', { name: 'S\'inscrire' });

        await user.click(signupButton);

        await waitFor(() => {
            screen.getByText(ERROR_MESSAGES.requiredEmail);
            screen.getByText(ERROR_MESSAGES.requiredPassword);
        });
    });

    it('should check for empty fields on login', async () => {
        const user = userEvent.setup();
        render(<AuthenticationForm/>);
        const loginButton = screen.getByRole('button', { name: 'Se connecter' });

        await user.click(loginButton);

        await waitFor(() => {
            screen.getByText(ERROR_MESSAGES.requiredEmail);
            screen.getByText(ERROR_MESSAGES.requiredPassword);
        });
    });

    it('should check for email and password format on signup', async () => {
        const user = userEvent.setup();
        render(<AuthenticationForm/>);
        const emailField = screen.getByLabelText('Email*');
        const passwordField = screen.getByLabelText('Mot de passe*');
        const signupButton = screen.getByRole('button', { name: 'S\'inscrire' });

        await user.type(emailField, 'test');
        await user.type(passwordField, 'test');
        await user.click(signupButton);

        await waitFor(() => {
            screen.getByText(ERROR_MESSAGES.wrongEmail);
            screen.getByText(ERROR_MESSAGES.wrongPassword);
        });
    });

    it('should check for email format on login', async () => {
        const user = userEvent.setup();
        render(<AuthenticationForm/>);
        const emailField = screen.getByLabelText('Email*');
        const passwordField = screen.getByLabelText('Mot de passe*');
        const loginButton = screen.getByRole('button', { name: 'Se connecter' });

        await user.type(emailField, 'test');
        await user.type(passwordField, 'test');
        await user.click(loginButton);

        await waitFor(() => {
            screen.getByText(ERROR_MESSAGES.wrongEmail);
            const passwordError = screen.queryByText(ERROR_MESSAGES.wrongPassword);
            expect(passwordError).toBeNull();
        });
    });

    it('should display the response error if fields are missing', async () => {
        sessionStorage.setItem('requiredError', 'true');
        const user = userEvent.setup();
        render(<AuthenticationForm/>);
        const emailField = screen.getByLabelText('Email*');
        const passwordField = screen.getByLabelText('Mot de passe*');
        const loginButton = screen.getByRole('button', { name: 'Se connecter' });

        await user.type(emailField, email);
        await user.type(passwordField, password);
        await user.click(loginButton);

        await waitFor(() => {
            screen.getByText(ERROR_MESSAGES.requiredEmail);
            screen.getByText(ERROR_MESSAGES.requiredPassword);
        });
    });

    it('should display the response error if fields are invalid', async () => {
        sessionStorage.setItem('invalidError', 'true');
        const user = userEvent.setup();
        render(<AuthenticationForm/>);
        const emailField = screen.getByLabelText('Email*');
        const passwordField = screen.getByLabelText('Mot de passe*');
        const loginButton = screen.getByRole('button', { name: 'Se connecter' });

        await user.type(emailField, email);
        await user.type(passwordField, password);
        await user.click(loginButton);

        await waitFor(() => {
            screen.getByText(ERROR_MESSAGES.wrongEmail);
            screen.getByText(ERROR_MESSAGES.wrongPassword);
        });
    });

    it('should display the conflict error if the email is already used for signup', async () => {
        sessionStorage.setItem('conflictError', 'true');
        const user = userEvent.setup();
        render(<AuthenticationForm/>);
        const emailField = screen.getByLabelText('Email*');
        const passwordField = screen.getByLabelText('Mot de passe*');
        const signupButton = screen.getByRole('button', { name: 'S\'inscrire' });

        await user.type(emailField, email);
        await user.type(passwordField, password);
        await user.click(signupButton);

        await waitFor(() => {
            screen.getByText(ERROR_MESSAGES.existingAccount);
        });
    });

    it('should display the error if the credentials are invalid', async () => {
        sessionStorage.setItem('credentialsError', 'true');
        const user = userEvent.setup();
        render(<AuthenticationForm/>);
        const emailField = screen.getByLabelText('Email*');
        const passwordField = screen.getByLabelText('Mot de passe*');
        const loginButton = screen.getByRole('button', { name: 'Se connecter' });

        await user.type(emailField, email);
        await user.type(passwordField, password);
        await user.click(loginButton);

        await waitFor(() => {
            screen.getByText(ERROR_MESSAGES.wrongCredentials);
        });
    });

    it('should redirect to an error page if the server repsond with a not supported status', async () => {
        sessionStorage.setItem('otherError', 'true');
        const user = userEvent.setup();
        render(<AuthenticationForm/>);
        const emailField = screen.getByLabelText('Email*');
        const passwordField = screen.getByLabelText('Mot de passe*');
        const loginButton = screen.getByRole('button', { name: 'Se connecter' });

        await user.type(emailField, email);
        await user.type(passwordField, password);
        await user.click(loginButton);

        await waitFor(() => {
            const path = screen.getByTestId('search-path');
            expect(path).toHaveTextContent(/^\/error$/);
        });
    });

    it('should redirect to the error page if the status is 400 but there are no details', async () => {
        sessionStorage.setItem('otherSyntaxError', 'true');
        const user = userEvent.setup();
        render(<AuthenticationForm/>);
        const emailField = screen.getByLabelText('Email*');
        const passwordField = screen.getByLabelText('Mot de passe*');
        const loginButton = screen.getByRole('button', { name: 'Se connecter' });

        await user.type(emailField, email);
        await user.type(passwordField, password);
        await user.click(loginButton);

        await waitFor(() => {
            const path = screen.getByTestId('search-path');
            expect(path).toHaveTextContent(/^\/error$/);
        });
    });

    it('should send a signup request with the right informations, and display a loader', async () => {
        const user = userEvent.setup();
        render(<AuthenticationForm/>);
        const emailField = screen.getByLabelText('Email*');
        const passwordField = screen.getByLabelText('Mot de passe*');
        const signupButton = screen.getByRole('button', { name: 'S\'inscrire' });

        await user.type(emailField, email);
        await user.type(passwordField, password);
        await user.click(signupButton);

        await waitFor(() => {
            screen.getByLabelText('Requête en attente');
        });

        await waitFor(() => {
            const loader = screen.queryByLabelText('Requête en attente');
            expect(loader).toBeNull();
            expect(emailField).toHaveValue('');
            expect(passwordField).toHaveValue('');
        });
    });

    it('should send a login request with the right informations, and display a loader', async () => {
        const user = userEvent.setup();
        render(<AuthenticationForm/>);
        const emailField = screen.getByLabelText('Email*');
        const passwordField = screen.getByLabelText('Mot de passe*');
        const loginButton = screen.getByRole('button', { name: 'Se connecter' });

        await user.type(emailField, email);
        await user.type(passwordField, password);
        await user.click(loginButton);

        await waitFor(() => {
            screen.getByLabelText('Requête en attente');
        });

        await waitFor(() => {
            const loader = screen.queryByLabelText('Requête en attente');
            expect(loader).toBeNull();
            expect(emailField).toHaveValue('');
            expect(passwordField).toHaveValue('');
        });
    });

    it('should update the anti CSRF token', async () => {
        const user = userEvent.setup();
        render(<AuthenticationForm/>);
        const emailField = screen.getByLabelText('Email*');
        const passwordField = screen.getByLabelText('Mot de passe*');
        const loginButton = screen.getByRole('button', { name: 'Se connecter' });

        await user.type(emailField, email);
        await user.type(passwordField, password);
        await user.click(loginButton);

        await waitFor(() => {
            const antiCsrfToken = document.querySelector('meta[name="crsf-token"]').getAttribute('content');
            expect(antiCsrfToken).toBe('testToken');
        });
    });

    it('should remove the errors on each request', async () => {
        const user = userEvent.setup();
        render(<AuthenticationForm/>);
        const emailField = screen.getByLabelText('Email*');
        const passwordField = screen.getByLabelText('Mot de passe*');
        const signupButton = screen.getByRole('button', { name: 'S\'inscrire' });

        await user.type(emailField, 'test');
        await user.type(passwordField, 'test');
        await user.click(signupButton);

        await waitFor(() => {
            screen.getByText(ERROR_MESSAGES.wrongEmail);
            screen.getByText(ERROR_MESSAGES.wrongPassword);
        });

        sessionStorage.setItem('conflictError', 'true');
        await user.type(emailField, email);
        await user.type(passwordField, password);
        await user.click(signupButton);

        await waitFor(() => {
            const emailError = screen.queryByText(ERROR_MESSAGES.wrongEmail);
            const passwordError = screen.queryByText(ERROR_MESSAGES.wrongPassword);
            screen.getByText(ERROR_MESSAGES.existingAccount);
            expect(emailError).toBeNull();
            expect(passwordError).toBeNull();
        });
    });
});