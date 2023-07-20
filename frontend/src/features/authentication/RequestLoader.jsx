import ProgressIndicator from '../../components/ProgressIndicator/ProgressIndicator';
import style from './AuthenticationForm.module.css';
import PropTypes from 'prop-types';

export default function RequestLoader({
    signupLoading,
}) {
    if (signupLoading) {
        return <div className={style.requestLoader}>
            <ProgressIndicator circular label="Requête d'inscription en attente" />
        </div>;
    }

    return;
}

RequestLoader.defaultProps = {
    signupLoading: false,
};

RequestLoader.propTypes = {
    signupLoading: PropTypes.bool,
};