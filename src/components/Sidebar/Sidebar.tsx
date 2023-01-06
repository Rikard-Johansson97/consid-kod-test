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
          <li>
            <Link className={styles.link} href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link href='/product' className={styles.link}>
              Products
            </Link>
          </li>
          <li>
            <Link href='/about' className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href='/contact' className={styles.link}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
