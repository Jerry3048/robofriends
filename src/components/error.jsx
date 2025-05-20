import { Component } from "react";
import PropTypes from "prop-types";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can log the error to an error reporting service here
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ooops, something went wrong.</h1>;
    }
    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node
};

export default ErrorBoundary;