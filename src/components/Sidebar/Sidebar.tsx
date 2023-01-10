import React, { useEffect } from "react";
import styles from "./sidebar.module.scss";
import IconButton from "@mui/material/IconButton";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import Link from "next/link";

const Sidebar = (props: any) => {
  const { isOpen, setIsOpen } = props;

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product" },
    { name: "About", href: "/about" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <>
      {
        <div
          className={`${styles.overlay} ${isOpen && styles.active}`}
          onClick={() => setIsOpen(!isOpen)}></div>
      }
      <div className={`${styles.sidebar} ${isOpen ? styles.active : ""}`}>
        <IconButton onClick={() => setIsOpen(!isOpen)}>
          <DensityMediumOutlinedIcon className={styles.btnIcon} />
        </IconButton>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className={styles.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
