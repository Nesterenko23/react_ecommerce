import React from "react";
import styles from "./notFoundPage.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.errorSection}>
      <span style={{ fontSize: "64px" }}>🤔</span>
      <h1>404</h1>
      <h1>Page not found</h1>
      <h1>Please, check your URL or click the button below</h1>
      <Button
        onClick={() => navigate("/")}
        sx={{ width: "auto", height: "50px", marginTop: "20px" }}
        variant="contained"
      >
        Home
      </Button>
    </section>
  );
};

export default NotFoundPage;
