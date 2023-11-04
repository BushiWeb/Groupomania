export const ROLES = {
    1: {
        name: 'Administrateur',
        admin: true,
    },
    2: {
        name: 'Utilisateur',
    },
};

/**
 * Allows to check if a role id corresponds to the amdmin role
 * @param {number} roleId
 * @returns {boolean}
 */
export function isAdmin(roleId) {
    return !!ROLES[roleId].admin;
}

/**
 * Get the role name
 * @param {number} roleId
 * @returns {string}
 */
export function getRoleName(roleId) {
    return ROLES[roleId].name;
}