import ProgressIndicator from '../../../components/ProgressIndicator/ProgressIndicator';
import style from './UpdateUserDialog.module.css';
import PropTypes from 'prop-types';

export default function RequestLoader({ isLoading }) {
    if (isLoading) {
        return (
            <div className={style.requestLoader}>
                <ProgressIndicator circular label="Requête en attente" />
            </div>
        );
    }

    return;
}

RequestLoader.defaultProps = {
    isLoading: false,
};

RequestLoader.propTypes = {
    isLoading: PropTypes.bool,
};
