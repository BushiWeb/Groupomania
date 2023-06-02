import { useRipple } from '../../hooks/useRipple';
import style from './InteractiveElement.module.css';
import PropTypes from 'prop-types';
import { useRef } from 'react';

/**
 * Creates an interactive element with a minimum target size and a state layer.
 * Additionnal props are passed as are to the root elements.
 * The root element is given via the prop, and the content is given as children.
 */
export default function InteractiveElement({
    children, rootElement, className, hover, focus, active, rippleDuration, stateLayerColor, action, ...rootProps
}) {
    const rippleTrigger = useRipple(rippleDuration);
    const stateLayerRef = useRef(null);
    const Root = rootElement;
    const classNames = `${style.interactiveElement} ${className}`;
    const states = {
        ...hover && { 'data-state-hover': true },
        ...focus && { 'data-state-focus': true },
        ...active && { 'data-state-active': true },
    };

    function handlePointerDown() {
        if (action) {
            action();
        }

        if (rippleDuration > 0) {
            rippleTrigger(stateLayerRef.current);
        }
    }

    function handleKeyDown(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            if (action) {
                action();
            }

            if (rippleDuration > 0) {
                rippleTrigger(stateLayerRef.current);
            }
        }
    }

    return <Root
        {...states}
        className={classNames}
        {... (rippleDuration > 0 || action) && {
            onPointerDown: handlePointerDown,
            onKeyDown: handleKeyDown,
        }}
        {...rootProps}
    >
        <div className={style.targetLayer}></div>
        <div
            className={style.stateLayer}
            style={{
                '--state-layer-color': `var(--color-${stateLayerColor})`,
            }}
            ref={stateLayerRef}
        ></div>
        {children}
    </Root>;
}

InteractiveElement.defaultProps = {
    className: '',
    hover: true,
    focus: true,
    active: true,
    rippleDuration: 0,
    stateLayerColor: 'on-surface',
    action: undefined,
};

InteractiveElement.propTypes = {
    /** Root element to use, either a dom element as a string or a componenent. Required */
    rootElement: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.elementType,
    ]).isRequired,

    /** Class name to give to the root element, on top of the default styling */
    className: PropTypes.string,

    /** Weither the element should react to the hover event or not. Defaults to true */
    hover: PropTypes.bool,

    /** Weither the element should react to the focus event or not. Defaults to true */
    focus: PropTypes.bool,

    /** Weither the element should react to the pressed event or not. Defaults to true */
    active: PropTypes.bool,

    /** Duration of the ripple effect. To prevent the effect from running, give the value 0. Defaults to 0 */
    rippleDuration: PropTypes.number,

    /** Color of the state layer, on-surface by default */
    stateLayerColor: PropTypes.oneOf([
        'primary',
        'on-primary',
        'primary-container',
        'on-primary-container',
        'primary-fixed',
        'primary-fixed-dim',
        'on-primary-fixed',
        'on-primary-fixed-variant',
        'secondary',
        'on-secondary',
        'secondary-container',
        'on-secondary-container',
        'secondary-fixed',
        'secondary-fixed-dim',
        'on-secondary-fixed',
        'on-secondary-fixed-variant',
        'tertiary',
        'on-tertiary',
        'tertiary-container',
        'on-tertiary-container',
        'tertiary-fixed',
        'tertiary-fixed-dim',
        'on-tertiary-fixed',
        'on-tertiary-fixed-variant',
        'error',
        'on-error',
        'error-container',
        'on-error-container',
        'surface',
        'surface-dim',
        'surface-bright',
        'surface-container-lowest',
        'surface-container-low',
        'surface-container',
        'surface-container-high',
        'surface-container-highest',
        'on-surface',
        'on-surface-variant',
        'inverse-surface',
        'inverse-on-surface',
        'inverse-primary',
    ]),

    /** Action to execute when activating the element with a pointer or the keyboard */
    action: PropTypes.func,
};