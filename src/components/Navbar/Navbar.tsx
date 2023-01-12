import Link from "next/link";
import { useState } from "react";
import styles from "./navbar.module.scss";
import IconButton from "@mui/material/IconButton";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Sidebar from "../Sidebar/Sidebar";
import DropMenu from "../DropMenu/DropMenu";
import { LinkType, MenuData } from "../../types/types";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuData, setMenuData] = useState<Partial<MenuData>>({});
  const [showDropMenu, setShowDropMenu] = useState(false);

  const toggleDropMenu = (data: MenuData, state: boolean) => {
    setMenuData(data);
    setShowDropMenu(state);
  };

  const cartData: MenuData = {
    data: {
      title: "Cart",
      btn: "Add to Cart",
      keyValue: "cart",
    },
  };

  const wishListData: MenuData = {
    data: {
      title: "Wishlist",
      btn: "",
      keyValue: "favorite",
    },
  };

  const links: LinkType[] = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Products",
      url: "/product",
    },
    {
      id: 3,
      title: "Checkout",
      url: "/checkout",
    },
  ];

  return (
    <nav className={styles.nav}>
      <IconButton onClick={() => setIsOpen(!isOpen)}>
        <DensityMediumOutlinedIcon className={styles.btnIcon} />
      </IconButton>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <ul className={styles.links}>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link className={styles.link} href={link.url}>
                {link.title}
              </Link>
            </li>
          );
        })}
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
        <DropMenu menuData={menuData} toggleDropMenu={toggleDropMenu} />
      )}
    </nav>
  );
};

export default Navbar;
