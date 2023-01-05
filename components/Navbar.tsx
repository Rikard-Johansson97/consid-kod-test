import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.scss";
import IconButton from "@mui/material/IconButton";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <DensityMediumOutlinedIcon className={styles.btnIcon} />
      </IconButton>
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
            <Link href='/products' className={styles.link}>
              Products
            </Link>
          </li>
          <li>
            <Link href='/about' className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href='/about' className={styles.link}>
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      <ul className={styles.links}>
        <li>
          <Link className={styles.link} href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/products' className={styles.link}>
            Products
          </Link>
        </li>
      </ul>
      <IconButton className={styles.btnIcon}>
        <ShoppingCartOutlinedIcon />
      </IconButton>
    </nav>
  );
};

export default Navbar;
