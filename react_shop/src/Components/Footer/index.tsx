import React from "react";
import styles from "./footer.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import { Link } from "@mui/material";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.fLeftSide}>
        <div className={styles.topText}>
          <span>CONTACT</span>
          <span>TERMS OF SERVICES</span>
          <span>SHIPPING AND RETURNS</span>
        </div>
        <div className={styles.bottomText}>
          <span>© 2023 Nesterenko. Terms of use and privacy policy.</span>
        </div>
      </div>

      <div className={styles.fRightSide}>
        <Link href="https://www.instagram.com/nesterenk023/">
          <IconButton>
            <InstagramIcon />
          </IconButton>
        </Link>
        <Link href="https://github.com/Nesterenko23">
          <IconButton>
            <GitHubIcon />
          </IconButton>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
