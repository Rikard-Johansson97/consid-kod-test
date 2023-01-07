import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.scss";
import IconButton from "@mui/material/IconButton";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <DensityMediumOutlinedIcon className={styles.btnIcon} />
      </IconButton>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
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
      </ul>
      <div className={styles.cart}>
        <IconButton className={styles.btnIcon}>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton className={styles.btnIcon}>
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
