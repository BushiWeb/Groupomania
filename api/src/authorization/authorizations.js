import config from '../config/config.js';

/**
 * Contains all authorizations rules.
 * Each rule contains:
 *      - The actions or actions, as a string or array of strings. It's what the user wants to do.
 *      - The subject, as a string containing the name of the model.
 *        It's the entity that the user wants to apply the action to.
 *      - The optionnal fields, as a string or array of strings.
 *        It's the specific properties of the subject the user wants to apply the action to.
 *        With no fields, the authorization applies to the entire subject.
 *      - The optionnal conditions, as an object containing mongo style conditions.
 *        It's the conditions the user needs to meet in order to have permission to execute his action.
 *        With no conditions, then the user has the right to execute his action.
 * User and subject in conditions:
 *      - In condition fields, you may use the User or Subject identifiers to refer to the user or the subject.
 *      - In condition values, you may use a special syntax to access to the user or subject properties:
 *              '{{User.prop}}' and '{{Subject.prop}}'
 *        If you don't want the string to be interpolated, add a '\' at the begining.
 * Supported operators are $eq and $or. Other operators can be added if needed.
 */
export default [
    // To update a user's password or email, the client must be the user himself
    {
        actions: 'update',
        subject: 'User',
        fields: ['email', 'password'],
        conditions: { 'User.userId': '{{Subject.userId}}' },
    },

    // To change a user's role, the client must be an admin
    {
        actions: 'update',
        subject: 'User',
        fields: 'roleId',
        conditions: { 'User.roleId': config.get('adminUser.roleId') },
    },

    // To delete a user, the client must be the user himself or must be an admin
    {
        actions: 'delete',
        subject: 'User',
        conditions: {
            $or: [
                { 'User.roleId': config.get('adminUser.roleId') },
                { 'User.userId': '{{Subject.userId}}' },
            ],
        },
    },

    // To update a post, the client must own the post or be an admin
    {
        actions: 'update',
        subject: 'Post',
        fields: ['title', 'message', 'imageUrl'],
        conditions: {
            $or: [
                { 'User.roleId': config.get('adminUser.roleId') },
                { 'User.userId': '{{Subject.writerId}}' },
            ],
        },
    },

    // To delete a post, the client must own the post or be an admin
    {
        actions: 'delete',
        subject: 'Post',
        conditions: {
            $or: [
                { 'User.roleId': config.get('adminUser.roleId') },
                { 'User.userId': '{{Subject.writerId}}' },
            ],
        },
    },
];