import { Component } from "react";
import withLog from "../../hoc/withLog";

import styles from "./styles.module.css";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.type";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static displayName = "ErrorBoundary";

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.wrapper}>
          <div className={styles.oops}>Oops!</div>
          {this.state.error?.message}
        </div>
      );
    }

    return this.props.children;
  }
}

export default withLog(ErrorBoundary);
