import { jest } from '@jest/globals';

const mockSave = jest.fn(async function () {
    try {
        await this.validate();
        return new Promise((resolve) => {
            resolve(this);
        });
    } catch (error) {
        return new Promise((resolve, reject) => {
            reject(error);
        });
    }
});

const mockValidate = jest.fn(function () {
    return new Promise((resolve) => {
        resolve(true);
    });
});

const mockCreate = jest.fn(async function (values) {
    const modelInstance = MockModel.build(values);

    return modelInstance.save();
});

const mockBuild = jest.fn(function (values) {
    if (Array.isArray(values)) {
        const modelInstances = [];
        for(const value of values) {
            modelInstances.push(new MockModel(value));
        }
        return modelInstances;
    }

    return new MockModel(values);
});

// Il est nécessaire de faire retourner à cette fonction la promesse résolue avec la bonne valeur
const mockFindOne = jest.fn(function () {
    return new Promise((resolve) => {
        resolve(this);
    });
});

class MockModel {
    constructor(values) {
        this.dataValues = values;

        for (const value in this.dataValues) {
            Object.defineProperty(this, value, {get: function() { return this.dataValues[value]; }});
        }
    }


    // Static method mock
    static create = mockCreate;

    static build = mockBuild;

    static findOne = mockFindOne;


    // Instance methods
    get (value) {
        if (value) {
            return this.dataValues[value];
        }

        return this.dataValues;
    }

    save = mockSave;

    validate = mockValidate;
}

function clearMocks() {
    mockSave.mockClear();
    mockValidate.mockClear();
    MockModel.create.mockClear();
    MockModel.build.mockClear();
    mockFindOne.mockClear();
}

export { mockSave, mockValidate, mockCreate, mockBuild, MockModel, mockFindOne, clearMocks };
export default MockModel;

beforeEach(() => {
    clearMocks();
});


describe('Model mock test suite', () => {
    const testValues = {
        value1: 3,
        value2: 'test'
    };

    const testReturn = 'test return';

    describe('Static method test suite', () => {
        describe('Build method test suite', () => {
            it('should return an instance of MockModel', () => {
                const instance = MockModel.build(testValues);
                expect(instance).toBeInstanceOf(MockModel);
                expect(instance.dataValues).toEqual(testValues);
            });

            it('should return an array of instances if given an array', () => {
                const testValuesArray = [
                    {
                        value1: 3,
                        value2: 'test'
                    },{
                        value1: 2,
                        value2: 'test1'
                    }
                ];
                const instances = MockModel.build(testValuesArray);
                expect(instances).toBeInstanceOf(Array);
                expect(instances).toHaveLength(testValuesArray.length);
                for (const instance of instances) {
                    expect(instance).toBeInstanceOf(MockModel);
                    expect(testValuesArray).toContain(instance.dataValues);
                }
            });

            it('should return the mocked value', () => {
                mockBuild.mockReturnValueOnce(testReturn);
                expect(MockModel.build()).toEqual(testReturn);
            });
        });

        describe('Create method test suite', () => {
            it('should return a promised resolved with an instance of MockModels', async () => {
                const instance = await MockModel.create(testValues);
                expect(instance).toBeInstanceOf(MockModel);
                expect(instance.dataValues).toEqual(testValues);
                expect(instance.save).toHaveBeenCalled();
            });

            it('should return a promise rejected with the chosen value if save rejects', async () => {
                mockSave.mockRejectedValueOnce(testReturn);
                await expect(MockModel.create(testValues)).rejects.toBe(testReturn);
            });

            it('should return a promised resolved with the chosen value when mocked', async () => {
                mockCreate.mockResolvedValueOnce(testReturn);
                await expect(MockModel.create()).resolves.toBe(testReturn);
            });

            it('should return a promised resolved with the chosen value when mocked', async () => {
                mockCreate.mockRejectedValueOnce(testReturn);
                await expect(MockModel.create()).rejects.toBe(testReturn);
            });
        });

        describe('findOne method test suite', () => {
            it('should return a promised resolved with the prepared data', async () => {
                const returnedData = {
                    email: 'email@example.com',
                    password: 'dfqdqfqpoihqdfhqosihdfqhqkdfqjhsfqskdjh',
                    role: 2
                };
                mockFindOne.mockResolvedValueOnce(new MockModel(returnedData));
                const data = await MockModel.findOne(testValues);
                expect(data).toBeInstanceOf(MockModel);
                expect(data.dataValues).toEqual(returnedData);
            });
        });
    });

    describe('Instance method test suite', () => {
        describe('Constructor test suite', () => {
            it('Should save all the properties in datavalue', () => {
                const newModel = new MockModel(testValues);
                expect(newModel.dataValues).toEqual(testValues);
            });

            it('should create getters for thos properties', () => {
                const newModel = new MockModel(testValues);
                for(const value in testValues) {
                    expect(newModel[value]).toEqual(testValues[value]);
                }
            });
        });

        describe('get method test suite', () => {
            it('should return all the properties', () => {
                const newModel = new MockModel(testValues);
                expect(newModel.get()).toEqual(testValues);
            });

            it('should return the right value', () => {
                const newModel = new MockModel(testValues);
                for(const value in testValues) {
                    expect(newModel.get(value)).toEqual(testValues[value]);
                }
            });
        });

        describe('validate method test suite', () => {
            it('should return a promise resolved with true', () => {
                const newModel = new MockModel(testValues);
                return expect(newModel.validate()).resolves.toBe(true);
            });

            it('should return a promise resolved with the chosen value when mocked', () => {
                const newModel = new MockModel(testValues);
                mockValidate.mockResolvedValueOnce(testReturn);
                return expect(newModel.validate()).resolves.toBe(testReturn);
            });

            it('should return a promise rejected with the chosen value when mocked', () => {
                const newModel = new MockModel(testValues);
                mockValidate.mockRejectedValueOnce(testReturn);
                return expect(newModel.validate()).rejects.toBe(testReturn);
            });
        });

        describe('Save method test suite', () => {
            it('should return a promise resolved with the instance', () => {
                const newModel = new MockModel(testValues);
                return expect(newModel.save()).resolves.toEqual(newModel);
            });

            it('should return a promise resolved with the chosen value when mocked', () => {
                const newModel = new MockModel(testValues);
                mockSave.mockResolvedValueOnce(testReturn);
                return expect(newModel.save()).resolves.toBe(testReturn);
            });

            it('should return a promise rejected with the chosen value when mocked', () => {
                const newModel = new MockModel(testValues);
                mockSave.mockRejectedValueOnce(testReturn);
                return expect(newModel.save()).rejects.toBe(testReturn);
            });

            it('should return a promise rejected with the chosen if validation fails', () => {
                const newModel = new MockModel(testValues);
                mockValidate.mockRejectedValueOnce(testReturn);
                return expect(newModel.save()).rejects.toBe(testReturn);
            });
        });
    });
});