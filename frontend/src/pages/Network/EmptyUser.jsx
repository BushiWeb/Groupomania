import { useOutletContext, useParams } from 'react-router-dom';
import style from './Network.module.css';
import { useState } from 'react';
import InfiniteUserList from '../../features/users/InfiniteUserList/InfiniteUserList';

/** Net<ork page page, inserted within the global UI */
export default function EmptyUser() {
    return <div className={style.userPlaceholder}>
        <p>Veuillez choisir un utilisateur dans la liste ci-contre pour voir ses informations et ses posts.</p>
    </div>;
}