import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.scss";
import IconButton from "@mui/material/IconButton";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Sidebar from "../Sidebar/Sidebar";
import DropMenu from "../DropMenu/DropMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuData, setMenuData] = useState(null);
  const [showDropMenu, setShowDropMenu] = useState(false);

  const toggleDropMenu = (data: any, state: boolean) => {
    setMenuData(data);
    setShowDropMenu(state);
  };

  // TODO DUMMY DATA FIX LATER
  const cartData = {
    title: "Cart",
    btn: "Proceed to Checkout",
    keyValue: "cart",
  };
  const wishListData = { title: "Wishlist", btn: "", keyValue: "favorites" };

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
        <IconButton
          className={styles.btnIcon}
          onClick={() => toggleDropMenu(wishListData, true)}>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton
          className={styles.btnIcon}
          onClick={() => toggleDropMenu(cartData, true)}>
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </div>
      {showDropMenu && (
        <DropMenu data={menuData} toggleDropMenu={toggleDropMenu} />
      )}
    </nav>
  );
};

export default Navbar;
