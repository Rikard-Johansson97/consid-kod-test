import React from "react";
import Link from "next/link";
import styles from "./footer.module.scss";
import { IconButton } from "@mui/material";

const Footer = () => (
  <footer className={styles.footer}>
    <Link href='/' className={styles.logo}>
      Consid Commerce
    </Link>
    <nav className={styles.nav}>
      <IconButton>
        <Link href='/' className={styles.link}>
          Home
        </Link>
      </IconButton>
      <IconButton>
        <Link href='/product' className={styles.link}>
          Products
        </Link>
      </IconButton>
      <IconButton>
        <Link href='/about' className={styles.link}>
          About
        </Link>
      </IconButton>
      <IconButton>
        <Link href='/contact' className={styles.link}>
          Contact
        </Link>
      </IconButton>
    </nav>
    <p className={styles.copyright}>
      Copyright {new Date().getFullYear()}. All rights reserved.
    </p>
  </footer>
);

export default Footer;
