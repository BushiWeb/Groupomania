import { useOutletContext, useParams } from 'react-router-dom';
import style from './User.module.css';
import { useState } from 'react';
import InfiniteUserList from '../../features/users/InfiniteUserList/InfiniteUserList';

/** Net<ork page page, inserted within the global UI */
export default function EmptyUser() {
    return <p>Coucou</p>;
}