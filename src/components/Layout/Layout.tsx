import { Suspense } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import withLog from "../../hoc/withLog";
import Providers from "../Providers/Providers";

import styles from "./styles.module.css";
import { LayoutProps } from "./Layout.type";

function Layout({ children }: LayoutProps) {
  return (
    <Providers>
      <Header />
      <div className={styles.wrapper}>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ErrorBoundary>
        <Footer />
      </div>
    </Providers>
  );
}

Layout.displayName = "Layout";

export default withLog(Layout);
