import React from 'react';
import { useHref, useLinkClickHandler } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Custom React Router Link.
 * Adds the possibility to activate it using the spacebar.
 */
const Link = React.forwardRef(
    (
        {
            onClick,
            onKeyDown,
            replace,
            state,
            target,
            to,
            children,
            useSpaceBar = true,
            ...rest
        },
        ref,
    ) => {
        let href = useHref(to);
        let navigationHandler = useLinkClickHandler(to, {
            replace,
            state,
            target,
        });

        function handleClick(e) {
            onClick?.(e);
            if (!e.defaultPrevented) {
                navigationHandler(e);
            }
        }

        function handleKeyDown(e) {
            onKeyDown?.(e);
            if (!e.defaultPrevented && e.key === ' ') {
                e.preventDefault();
                e.target.click();
            }
        }

        return (
            <a
                {...rest}
                href={href}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                ref={ref}
                target={target}
            >
                {children}
            </a>
        );
    },
);

Link.defaultProps = {
    useSpaceBar: true,
};

Link.propTypes = {
    /** Additionnal onClick event */
    onClick: PropTypes.func,

    /** Additionnal onKeyDown event */
    onKeyDown: PropTypes.func,

    /** Link replace prop */
    replace: PropTypes.bool,

    /** Link state prop */
    state: PropTypes.any,

    /** Link target prop */
    target: PropTypes.string,

    /** Link to prop, required */
    to: PropTypes.string.isRequired,

    /** Weither to also use the space bar to trigger the link, defaults to true */
    useSpaceBar: PropTypes.bool,
};

export default Link;
