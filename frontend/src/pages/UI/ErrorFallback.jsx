import style from './ErrorFallback.module.css';

/**
 * Creates a component to display when an error is caught by the error boundary.
 * @param {string} wrapperClassName - Classname to give to the container.
 */
export default function createErrorFallback(wrapperClassName) {
    return function ({ error }) {
        return <div className={`${wrapperClassName} ${style.wrapper}`}>
            <h1 className={style.title}>Une erreur est survenue</h1>
            <p className={style.message}>
            Une erreur est survenue lors du chargement des données.
            Vous pouvez essayer de recharger la page. Si le problème persiste,
            n'hésitez pas à vous rapprocher d'un administrateur.
            </p>
        </div>;
    };

}