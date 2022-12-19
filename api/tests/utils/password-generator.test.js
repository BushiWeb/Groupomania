import { lerp, invLerp, clamp, range, generatePassword } from '../../src/utils/password-generator.js';

describe('Password generator test suite', () => {
    describe('lerp test suite', () => {
        it('should return 3', () => {
            expect(lerp(0, 10, 0.3)).toBe(3);
        });
    });

    describe('clamp test suite', () => {
        it('should return 3', () => {
            expect(clamp(3, 0, 10)).toBe(3);
        });
        it('should return 0', () => {
            expect(clamp(-3, 0, 10)).toBe(0);
        });
        it('should return 10', () => {
            expect(clamp(13, 0, 10)).toBe(10);
        });
    });

    describe('invLerp test suite', () => {
        it('should return 3', () => {
            expect(invLerp(0, 10, 3)).toBe(0.3);
        });
        it('should return 0', () => {
            expect(invLerp(0, 10, -3)).toBe(0);
        });
        it('should return 10', () => {
            expect(invLerp(0, 10, 13)).toBe(1);
        });
    });

    describe('range test suite', () => {
        it('should return 65', () => {
            expect(range(0, 10, 50, 100, 3)).toBe(65);
        });
    });

    describe('generatePassword test suite', () => {
        const characterSet = {
            uppercases: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            lowercases: 'abcdefghijklmnopqrstuvwxyz',
            numbers: '0123456789',
            symbols: '&~"#\'{([-|`_\\^@)]+=}$*,?;.:/!<>'
        };

        it('should return a password with the right length', () => {
            expect(generatePassword({ length: 5 })).toHaveLength(5);
        });

        it('should return have 1 of each character type at least', () => {
            let password = generatePassword();
            expect(password).toHaveLength(8);
            expect(characterSet.uppercases
                .split('')
                .reduce(
                    (accumulator, value) => password.includes(value) ? accumulator + 1 : accumulator,
                    0
                )
            ).toBeGreaterThanOrEqual(1);
            expect(characterSet.lowercases
                .split('')
                .reduce(
                    (accumulator, value) => password.includes(value) ? accumulator + 1 : accumulator,
                    0
                )
            ).toBeGreaterThanOrEqual(1);
            expect(characterSet.numbers
                .split('')
                .reduce(
                    (accumulator, value) => password.includes(value) ? accumulator + 1 : accumulator,
                    0
                )
            ).toBeGreaterThanOrEqual(1);
            expect(characterSet.symbols
                .split('')
                .reduce(
                    (accumulator, value) => password.includes(value) ? accumulator + 1 : accumulator,
                    0
                )
            ).toBeGreaterThanOrEqual(1);
        });

        it('should return have the right number of each character type at least', () => {
            const options = {
                length: 14,
                minUppercase: 2,
                minLowercase: 3,
                minNumbers: 4,
                minSymbols: 5
            };
            let password = generatePassword(options);
            console.log(password);

            const count = password.split('').reduce(
                (accumulator, value) => {
                    if (characterSet.lowercases.includes(value)) {
                        accumulator.lowercase++;
                    }
                    if (characterSet.uppercases.includes(value)) {
                        accumulator.uppercase++;
                    }
                    if (characterSet.numbers.includes(value)) {
                        accumulator.numbers++;
                    }
                    if (characterSet.symbols.includes(value)) {
                        accumulator.symbols++;
                    }

                    return accumulator;
                },
                {
                    uppercase: 0,
                    lowercase: 0,
                    numbers: 0,
                    symbols: 0
                }
            );

            expect(count.uppercase).toBeGreaterThanOrEqual(options.minUppercase);
            expect(count.lowercase).toBeGreaterThanOrEqual(options.minLowercase);
            expect(count.numbers).toBeGreaterThanOrEqual(options.minNumbers);
            expect(count.symbols).toBeGreaterThanOrEqual(options.minSymbols);


        });
    });
});