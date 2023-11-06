/** @type {import('jest').Config} */
module.exports = {
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest', // Se você estiver usando o Babel
    },
    testEnvironment: 'node',
}