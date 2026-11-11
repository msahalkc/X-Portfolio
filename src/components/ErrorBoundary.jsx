import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="wrap lost">
          <span className="label">Something went wrong</span>
          <h1>This page didn&apos;t load.</h1>
          <p>Try reloading. If it keeps happening, email me at msahalkc@gmail.com.</p>
          <a className="home-btn" href="/">
            Go home
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
