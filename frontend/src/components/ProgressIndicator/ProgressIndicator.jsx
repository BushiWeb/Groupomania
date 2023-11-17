import PropTypes from 'prop-types';
import style from './ProgressIndicator.module.css';

/**
 * Indeterminate progress indicator, circular or linear.
 */
export default function ProgressIndicator({ circular, label, className }) {
    const lineThickness = 4;

    if (circular) {
        const graphicsSize = 48,
            loaderSize = 40;
        return (
            <svg
                viewBox={`0 0 ${graphicsSize} ${graphicsSize}`}
                className={`${style.circular} ${className}`}
                role="progressbar"
                aria-label={label}
            >
                <circle
                    cx={`${graphicsSize / 2}`}
                    cy={`${graphicsSize / 2}`}
                    r={`${(loaderSize - lineThickness) / 2}`}
                    strokeWidth={lineThickness}
                    pathLength="100"
                />
            </svg>
        );
    }

    return (
        <svg
            viewBox={`0 0 100 ${lineThickness}`}
            preserveAspectRatio="none"
            className={`${style.linear} ${className}`}
            role="progressbar"
            aria-label={label}
        >
            <line
                x1="0"
                y1={`${lineThickness / 2}`}
                x2="100%"
                y2={`${lineThickness / 2}`}
                strokeWidth={lineThickness}
                pathLength="28"
            />
        </svg>
    );
}

ProgressIndicator.defaultProps = {
    circular: false,
    className: '',
};

ProgressIndicator.propTypes = {
    /** Weither the indicator is linear (default) or circular */
    circular: PropTypes.bool,

    /** Label of the progress indicator, required. It must describe what the progress indicator is waiting */
    label: PropTypes.string.isRequired,

    /** Classes to add to position the element */
    className: PropTypes.string,
};
