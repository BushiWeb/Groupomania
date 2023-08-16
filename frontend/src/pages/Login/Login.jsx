import AuthenticationForm from '../../features/authentication/AuthenticationForm';
import style from './Login.module.css';
import ProgressIndicator from '../../components/ProgressIndicator/ProgressIndicator';
import { useAutoLogin } from './useAutoLogin';

/** Login page */
export default function Login() {
    const authenticationError = useAutoLogin();
    let content;

    if (authenticationError) {
        content = <AuthenticationForm/>;

    } else {
        content = <ProgressIndicator circular label="Requête de connexion en attente en attente" />;
    }

    return <div className={style.login}>
        {content}
    </div>;
}