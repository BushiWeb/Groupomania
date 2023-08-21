import { Component } from 'react';

/**
 * Error boundary, to catch errors thrown in components
 * @
 */
export default class ErrorBoundary extends Component {
    /**
     * @param {Object} props
     * @param {Function} [props.onError] - Function to execute when an error is trown
     * @param {Function} [props.fallback] - Component to render in case an error is present, takes a prop named error
     */
    constructor(props) {
        super(props);
        this.onError = props.onError;
        this.Fallback = props.fallback;
        this.state = {
            hasError: false,
            error: null,
        };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true, error });
    }

    componentDidUpdate() {
        if (this.state.hasError) {
            this.setState({ hasError: false, error: null });
            this.onError?.(this.state.error);
        }
    }

    render() {
        if (this.state.hasError) {
            return <this.Fallback error={this.state.error}/>;
        }

        return this.props.children;
    }
}