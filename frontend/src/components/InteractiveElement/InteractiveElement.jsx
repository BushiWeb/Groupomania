import { useRipple } from '../../hooks/useRipple';
import style from './InteractiveElement.module.css';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

/**
 * Creates an interactive element with a minimum target size and a state layer.
 * Additionnal props are passed as are to the root elements.
 * The root element is given via the prop, and the content is given as children.
 */
const InteractiveElement = forwardRef(function InteractiveElement({
    children,
    rootElement,
    className,
    hover,
    focus,
    active,
    rippleDuration,
    stateLayerColor,
    onPointerDown,
    onKeyDown,
    ...rootProps
}, ref) {
    const {
        handleKeyDown,
        handlePointerDown,
        stateLayerRef,
    } = useRipple(rippleDuration, { onPointerDown, onKeyDown });
    const Root = rootElement;
    const classNames = `${style.interactiveElement} ${className}`;
    const states = {
        ...hover && { 'data-state-hover': true },
        ...focus && { 'data-state-focus': true },
        ...active && { 'data-state-active': true },
    };

    return <Root
        {...states}
        className={classNames}
        {... (rippleDuration > 0 || onPointerDown) && { onPointerDown: handlePointerDown }}
        {... (rippleDuration > 0 || onKeyDown) && { onKeyDown: handleKeyDown }}
        {...rootProps}
        ref={ref}
    >
        <div className={style.targetLayer}></div>
        {stateLayerColor && <div
            className={style.stateLayer}
            style={{
                '--state-layer-color': `var(--color-${stateLayerColor})`,
            }}
            ref={stateLayerRef}
        ></div>}
        {children}
    </Root>;
});

InteractiveElement.defaultProps = {
    className: '',
    hover: true,
    focus: true,
    active: true,
    rippleDuration: 0,
    stateLayerColor: 'on-surface',
    onPointerDown: undefined,
    onKeyDown: undefined,
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

    /** Color of the state layer, on-surface by default, false to remove it */
    stateLayerColor: PropTypes.oneOf([
        false,
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
        'on-inverse-surface',
        'inverse-primary',
    ]),

    /** Event handler to execute on pointer down */
    onPointerDown: PropTypes.func,

    /** Event handler to execute on key down */
    onKeyDown: PropTypes.func,
};

export default InteractiveElement;