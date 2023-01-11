import React, { useEffect } from "react";
import styles from "./sidebar.module.scss";
import IconButton from "@mui/material/IconButton";
import DensityMediumOutlinedIcon from "@mui/icons-material/DensityMediumOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import Link from "next/link";

const Sidebar = (props: any) => {
  const { isOpen, setIsOpen } = props;

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      name: "Home",
      href: "/",
      icon: <CottageOutlinedIcon fontSize='large' />,
    },
    {
      name: "Products",
      href: "/product",
      icon: <ShoppingBagOutlinedIcon fontSize='large' />,
    },
    {
      name: "About",
      href: "/about",
      icon: <InfoOutlinedIcon fontSize='large' />,
    },
    {
      name: "Contact us",
      href: "/contact",
      icon: <AlternateEmailOutlinedIcon fontSize='large' />,
    },
    {
      name: "Checkout",
      href: "/checkout",
      icon: <ShoppingCartCheckoutOutlinedIcon fontSize='large' />,
    },
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
                <IconButton className={styles.btnIcon}>{link.icon}</IconButton>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
