import React from "react";
import styles from "./errorPage.module.scss";
const ServerErrorPage = () => {
  return (
    <section className={styles.errorSection}>
      <span style={{ fontSize: "64px" }}>😭</span>
      <h1>The server is temporarily unresponsive</h1>
      <h1>Please, reload the page or visit the site later.</h1>
    </section>
  );
};

export default ServerErrorPage;
