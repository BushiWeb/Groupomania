/**
 * Contains all authorizations rules.
 * Each rule contains:
 *      - The actions or actions, as a string or array of strings. It's what the user wants to do.
 *      - The subject, as a string containing the name of the model. It's the entity that the user wants to apply the action to.
 *      - The optionnal fields, as a string or array of strings. It's the specific properties of the subject the user wants to apply the action to. With no fields, the authorization applies to the entire subject.
 *      - The optionnal conditions, as an object containing mongo style conditions. It's the conditions the user needs to meet in order to have permission to execute his action. With no conditions, then the user has the right to execute his action.
 * In the conditions, you may use any available global variables, as well as the identifiers User and Subject to represent the user attempting the action, and the targetted subject. If you want to use the User or Subject properties in the value, use either '{{User.prop}}' or '{{Subject.prop}}'. Escaping the first bracket will use the value as a string.
 * Supported operators are $eq, $ne, $lt, $lte, $gt, $gte, $all, $regex, $or, $nor, $not, $and, $exists, $size, $mod, $where, $elemMatch, $nin, $in.
 */
export default [
    // To update a user's password or email, the client must be the user himself
    {
        actions: 'update',
        subject: 'User',
        fields: ['email', 'password'],
        conditions: {
            'User.userId': '{{Subject.userId}}'
        }
    },

    // To change a user's role, the client must be an admin
    {
        actions: 'update',
        subject: 'User',
        fields: 'roleId',
        conditions: {
            'User.roleId': 1
        }
    },

    // To delete a user, the client must be the user himself or must be an admin
    {
        actions: 'delete',
        subject: 'User',
        conditions: {
            $or: [
                { 'User.roleId': 1 },
                { 'User.userId': '{{Subject.userId}}' }
            ]
        }
    },
];