export const ROLES = [
    {
        id: 1,
        name: 'admin',
        admin: true,
    },
    {
        id: 2,
        name: 'user',
    },
];

/**
 * Allows to check if a role id corresponds to the amdmin role
 * @param {number} roleId
 * @returns {boolean}
 */
export function isAdmin(roleId) {
    return ROLES.find((value) => value.admin).id === roleId;
}

/**
 * Get the role name
 * @param {number} roleId
 * @returns {string}
 */
export function getRoleName(roleId) {
    return ROLES.find((value) => value.id === roleId);
}