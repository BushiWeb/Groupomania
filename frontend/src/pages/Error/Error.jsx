import { useNavigate } from 'react-router-dom';
import InteractiveElement from '../../components/InteractiveElement/InteractiveElement';
import Link from '../../components/Link/Link';
import style from './Error.module.css';
import { useChangePageTitle } from '../../hooks/useChangePageTitle';

export const PAGE_NAME = 'User';

/**
 * Not found error page
 */
export default function Error() {
    const navigate = useNavigate();

    useChangePageTitle('Groupomania - Erreur');

    return <div className={style.container}>
        <main className={style.error}>
            <h1 className={style.heading}>Une situation inattendue s'est produite.</h1>
            <p className={style.message}>
                Nous rencontrons quelques problèmes en tentant d'accéder à votre requête.
            </p>
            <details className={style.moreInfo}>
                <summary>Pourquoi c'est arrivé ?</summary>
                <ul>
                    <li>Le traitement de votre requête a retourné une erreur imprévue;</li>
                    <li>Le serveur peut être hors ligne ou bien rencontrer un problème de fonctionnement;</li>
                    <li>Votre connexion peut-être instable.</li>
                </ul>
            </details>
            <div className={style.ctaWrapper}>
                <h2 className={style.question}>J'aimerai régler mon problème.</h2>
                <div className={style.ctaMessage}>
                    <p>Voici quelques conseils:</p>
                    <ol className={style.actionList}>
                        <li>Vérifiez votre connexion;</li>
                        <li>Si votre connexion est bonne, alors réessayez après avoir rafraîchi la page;</li>
                        <li>Si tous vos essais sont vains, alors essayer de vous rapprocher des développeurs.</li>
                    </ol>
                </div>
                <InteractiveElement
                    rootElement={Link}
                    rippleDuration={350}
                    stateLayerColor='on-primary'
                    to="/"
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                    }}
                    className={style.cta}>
                    Retourner à la page précédente
                </InteractiveElement>
                <Link
                    to="/"
                    className={style.alternativeAction}>
                    Je préfère revenir à la page d'accueil
                </Link>
            </div>
        </main>
    </div>;
}