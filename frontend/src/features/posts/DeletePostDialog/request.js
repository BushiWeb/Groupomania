import { simpleFetch } from '../../../utils/fetch.js';

export const ERROR_MESSAGES = {
    forbiddenAction: 'Vous n\'avez pas les droits pour supprimer ce post',
    notFound: 'Le post que vous souhaitez supprimer ne peut pas être trouvé. Il se peut qu\'il ai déjà été supprimé.',
};

/**
 * Sends the delete post request
 * @param {number} postId - Id of the post to delete
 * @returns Returns the server response in JSON format
 * @throws Throws in case of an error
 */
export async function deletePostRequest(postId) {
    const response = simpleFetch({
        url: `/data/posts/${postId}`,
        method: 'DELETE',
    });

    return response;
}

/**
 * Handles request errors from post deletion requests
 * @param {Response} error - Response returned containing the error.
 * @returns {Promise}
 *  Returns a Promise resolved with an object container the error message for each field
 * @throws Throws an error if the error doesn't contain a body, or if it is not handled
 */
export async function handleDeletePostRequestError(error) {
    switch (error.status) {
    case 400:
        throw new Error('Unhandled 400 error type');
    case 401:
        throw new Error('Unauthorized');
    case 403:
        return ERROR_MESSAGES.forbiddenAction;
    case 404:
        return ERROR_MESSAGES.notFound;
    default:
        throw new Error('Unhandled error status');
    }
}