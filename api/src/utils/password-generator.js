import { webcrypto } from 'node:crypto';

/**
 * Linear interpolation.
 * @param low - Lower boundary of the interval.
 * @param up - Upper boundary of the interval.
 * @param decimal - Position of the value.
 * @returns Returns the value at the right position between low and up.
 */
export function lerp(low, up, decimal) {
    return low * (1 - decimal) + up * decimal;
}

/**
 * Clamp the value between two values.
 * @param value - Value to clamp.
 * @param [min=0] - Minimum.
 * @param [max=1] - Maximum.
 * @returns Returns the value if the value is between min and max, max if the value si greater than max and min if the value is lower than min.
 */
export function clamp(value, min = 0, max = 1) {
    return Math.min(max, Math.max(value, min));
}

/**
 * Inverse linear interpolation.
 * @param low - Lower boundary of the interval.
 * @param up - Upper boundary of the interval.
 * @param value - Value to interpolate.
 * @returns Returns the position of the value in the interval.
 */
export function invLerp(low, up, value) {
    return clamp((value - low) / (up - low));
}

/**
 * Convert a value from one range to an other.
 * @param low1 - Lower value of first range.
 * @param up1 - Upper value of first range.
 * @param low2 - Lower value of second range.
 * @param up2 - Upper value of second range.
 * @param value - Value in the first range.
 * @returns Returns the value converted into the second range.
 */
export function range(low1, up1, low2, up2, value) {
    return lerp(low2, up2, invLerp(low1, up1, value));
}

/**
 * Choose a random character from the given character set.
 * @param {string|Object} characterSet - List of available characters. Either a string or an object containing strings.
 * @returns Returns a random character from the character set.
 */
function getRandomCharacter(characterSet) {
    // Get character set
    let characters = '';
    if (typeof characterSet === 'object') {
        for (const category in characterSet) {
            characters += characterSet[category];
        }
    } else {
        characters += characterSet;
    }

    // Get random number
    const array = new Uint32Array(1);
    const randomNumber = webcrypto.getRandomValues(array)[0];

    // Get random character
    const index = Math.round(range(0, 4294967295, 0, characters.length - 1, randomNumber));
    return characters.at(index);
}

/**
 * Generate character set depending on the count.
 * Remove characters that are not needed anymore.
 * @param count - Number of needed characters category.
 * @param sets - Available character sets, object containing the categories.
 * @returns Returns an object containing the character sets to choose from.
 */
function getCharacterSet(count, sets) {
    const characterSet = {};
    for (const category in sets) {
        if (count[category] > 0) {
            characterSet[category] = sets[category];
        }
    }
    return characterSet;
}

/**
 * Updates the count of characters.
 * @param count - Number of needed characters category.
 * @param sets - Available character sets, object containing the categories.
 * @param newchar - New character added.
 * @returns Returns the new count object.
 */
function updateCharacterCount(count, sets, newChar) {
    const newCount = {
        total: count.total
    };
    for (const category in sets) {
        newCount[category] = count[category];
        if (sets[category].includes(newChar) && count[category] > 0) {
            newCount[category]--;
            newCount.total--;
        }
    }
    return newCount;
}

/**
 * Generates a strong password
 * @returns Returns the password.
 */
export function generatePassword(
    {
        length = 8,
        minLowercase = 1,
        minUppercase = 1,
        minNumbers = 1,
        minSymbols = 1
    } = {
        length: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1
    }
) {
    let password = '';

    const characterSet = {
        uppercases: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercases: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '&~"#\'{([-|`_\\^@)]+=}$*,?;.:/!<>'
    };

    let count = {
        uppercases: minUppercase,
        lowercases: minLowercase,
        numbers: minNumbers,
        symbols: minSymbols,
        total: minUppercase + minLowercase + minNumbers + minSymbols
    };


    for (let i = 0; i < length; i++) {
        let message = '-----------------\nNew round\n';
        message += `Count: ${JSON.stringify(count)}\n\n`;
        message += `i: ${i}\n\n`;
        message += `Characters left: ${length - i}\n\n`;
        let nextChar;
        if (count.total < length - i) {
            message += 'Use all character sets\n\n';
            nextChar = getRandomCharacter(characterSet);
        } else {
            const characterSubset = getCharacterSet(count, characterSet);
            message += `Use character subset ${JSON.stringify(characterSubset)}\n\n`;
            nextChar = getRandomCharacter(characterSubset);
        }

        message += `Next character: ${nextChar} \n\n`;

        count = updateCharacterCount(count, characterSet, nextChar);
        message += `New count: ${JSON.stringify(count)}\n\n`;
        password += nextChar;
        message += `Temporary password: ${password}`;
        console.log(message);
    }

    return password;
}