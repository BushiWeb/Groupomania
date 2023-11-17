import PropTypes from 'prop-types';
import style from './UsersList.module.css';
import ProgressIndicator from '../../../components/ProgressIndicator/ProgressIndicator';
import List from '../../../components/List/List';
import { forwardRef } from 'react';
import { isAdmin } from '../../../utils/roles.js';

/** List of posts */
const UsersList = forwardRef(
    ({ users, busy, selectedUserId, ...props }, ref) => {
        return (
            <section
                className={`${props.className || ''} ${style.usersList}`}
                {...(busy && { 'data-busy': true })}
                ref={ref}
            >
                <List
                    label="Liste des utilisateurs"
                    className={style.list}
                    aria-busy={busy}
                    data={
                        users ?
                            users.map(
                                ({
                                    userId,
                                    email,
                                    role: { name, roleId },
                                }) => ({
                                    headline: email,
                                    ...(isAdmin(roleId) && {
                                        supportingText: 'Administrateur',
                                    }),
                                    link: `${userId}`,
                                    ...(selectedUserId === userId && {
                                        selected: true,
                                    }),
                                }),
                            )
                        :   []
                    }
                />

                {busy && (
                    <ProgressIndicator
                        label="Chargement d'utilisateurs suivants"
                        circular
                        className={style.busy}
                    />
                )}
            </section>
        );
    },
);

UsersList.defaultProps = {
    busy: false,
};

UsersList.propTypes = {
    /** Liste des utilisateurs à afficher */
    users: PropTypes.arrayOf(
        PropTypes.exact({
            userId: PropTypes.number.isRequired,
            email: PropTypes.string.isRequired,
            role: PropTypes.exact({
                name: PropTypes.string.isRequired,
                roleId: PropTypes.number.isRequired,
            }),
        }),
    ),

    /** value of aria-busy, should be true if the posts list is being updated */
    busy: PropTypes.bool,

    /** Selected user id, shown or previously shown in the user page */
    selectedUserId: PropTypes.number,
};

export default UsersList;
