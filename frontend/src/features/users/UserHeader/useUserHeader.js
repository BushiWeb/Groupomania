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
 * isUpdateUserRoleOpen: boolean,
 * setIsUpdateUserRoleOpen: Function,
 * isDeleteUserOpen: boolean,
 * setIsDeleteUserOpen: Function,
 * actions: Array
 * }}
 */
export function useUserHeader(userId, topLevelHeader) {
    const mainActions = useMainHeaderActions();

    // Update user dialog state
    const [isUpdateUserOpen, setIsUpdateUserOpen] = useState(false);

    // Update user's role dialog state
    const [isUpdateUserRoleOpen, setIsUpdateUserRoleOpen] = useState(false);

    // Delete user dialog state
    const [isDeleteUserOpen, setIsDeleteUserOpen] = useState(false);

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
                    onClick: () => setIsDeleteUserOpen(true),
                    icon: 'delete_forever',
                },
            ] :
            [],

        ...editRoleButton ?
            [
                {
                    label: 'Modifier le role de l\'utilisateur',
                    onClick: () => setIsUpdateUserRoleOpen(true),
                    icon: 'admin_panel_settings',
                },
            ] :
            [],
    ];

    return {
        isUpdateUserOpen,
        setIsUpdateUserOpen,
        isUpdateUserRoleOpen,
        setIsUpdateUserRoleOpen,
        isDeleteUserOpen,
        setIsDeleteUserOpen,
        actions,
    };
}