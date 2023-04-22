import * as React from "react";
import {ErrorBoundaryProps, ErrorBoundaryState} from "../types";
import {Fragment} from "react";

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props) {
        super(props);
        this.state = {hasError: false, message: ''}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState<keyof ErrorBoundaryState>({hasError: true, message: error.message})
    }

    render() {
        return (
            <Fragment>
                {this.state.hasError ? (
                    <p>
                        {this.state.message}
                    </p>
                ) : this.props.children}
            </Fragment>
        )
    }
}

export default ErrorBoundary