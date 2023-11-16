import InteractiveElement from '../../components/InteractiveElement/InteractiveElement';
import Link from '../../components/Link/Link';
import { useChangePageTitle } from '../../hooks/useChangePageTitle';
import style from './Error.module.css';

export const PAGE_NAME = 'User';

/**
 * Not found error page
 */
export default function Error404() {
    useChangePageTitle('Groupomania - 404');

    return <div className={style.container}>
        <main className={style.notFound}>
            <h1 className={style.heading}>Nous n'avons pas trouvé cette page.</h1>
            <p className={style.message}>
                Si vous êtes sûr d'être à la bonne adresse, c'est que cette page n'existe pas encore.
            </p>
            <div className={style.ctaWrapper}>
                <h2 className={style.question}>Vous n'êtes pas bien ici ?</h2>
                <InteractiveElement
                    rootElement={Link}
                    rippleDuration={350}
                    stateLayerColor='on-primary'
                    to="/"
                    className={style.cta}>
                    Retourner à la page d'accueil
                </InteractiveElement>
            </div>
        </main>
    </div>;
}