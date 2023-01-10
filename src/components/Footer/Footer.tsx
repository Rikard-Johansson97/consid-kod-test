import React from "react";
import Link from "next/link";
import styles from "./footer.module.scss";
import { IconButton } from "@mui/material";

const links = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/product" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

//TODO: CSS PROBLEM, footer är inte längst ner (responsiv)

const Footer = () => (
  <footer className={styles.footer}>
    <Link href='/' className={styles.logo}>
      Consid Commerce
    </Link>
    <nav className={styles.nav}>
      {links.map((link, i) => (
        <IconButton key={i}>
          <Link href={link.href} className={styles.link}>
            {link.name}
          </Link>
        </IconButton>
      ))}
    </nav>
    <p className={styles.copyright}>
      Copyright {new Date().getFullYear()}. All rights reserved.
    </p>
  </footer>
);

export default Footer;
