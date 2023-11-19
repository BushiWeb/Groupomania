import { jest } from '@jest/globals';

// Il est nécessaire de faire retourner à cette fonction la promesse résolue avec la bonne valeur
const mockQuery = jest.fn(function () {
    return new Promise((resolve) => {
        resolve(this);
    });
});

const sequelizeInstance = {
    query: mockQuery,
};

function clearSequelizeMocks() {
    mockQuery.mockClear();
}

export { mockQuery, clearSequelizeMocks };
export default sequelizeInstance;