import { useSelector } from 'react-redux';
import { useMainHeaderActions } from '../../../hooks/useMainHeaderActions.js';
import { selectRighInfos } from '../../../utils/selectors.js';
import { useState } from 'react';

/**
 * Returns the actions needed in the user page header.
 * @param {number} userId
 * @param {boolean} topLevelHeader
 * @returns {{
 * isUpdateUserOpen: boolean,
 * setIsUpdateUserOpen: Function,
 * actions: Array
 * }}
 */
export function useUserHeader(userId, topLevelHeader) {
    const mainActions = useMainHeaderActions();

    // Update user dialog state
    const [isUpdateUserOpen, setIsUpdateUserOpen] = useState(false);

    // Action buttons to display
    const { isAdmin, userId: currentUserId } = useSelector(selectRighInfos);
    const deleteButton = isAdmin || currentUserId === userId,
        editButton = currentUserId === userId,
        editRoleButton = isAdmin;

    const actions = [
        ...topLevelHeader ?
            mainActions :
            [],

        ...editButton ?
            [
                {
                    label: 'Modifier le profil',
                    onClick: () => setIsUpdateUserOpen(true),
                    icon: 'edit',
                },
            ] :
            [],

        ...deleteButton ?
            [
                {
                    label: 'Supprimer le profil',
                    onClick: () => console.log('Suppression du profil'),
                    icon: 'delete_forever',
                },
            ] :
            [],

        ...editRoleButton ?
            [
                {
                    label: 'Modifier le role de l\'utilisateur',
                    onClick: () => console.log('Modification du role'),
                    icon: 'admin_panel_settings',
                },
            ] :
            [],
    ];

    return {
        isUpdateUserOpen,
        setIsUpdateUserOpen,
        actions,
    };
}