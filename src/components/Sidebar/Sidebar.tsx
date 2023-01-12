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
import { LinkType } from "../../types/types";

const Sidebar = (props: any) => {
  const { isOpen, setIsOpen } = props;

  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsOpen]);

  const links: LinkType[] = [
    {
      title: "Home",
      url: "/",
      icon: <CottageOutlinedIcon fontSize='large' />,
    },
    {
      title: "Products",
      url: "/product",
      icon: <ShoppingBagOutlinedIcon fontSize='large' />,
    },
    {
      title: "About",
      url: "/about",
      icon: <InfoOutlinedIcon fontSize='large' />,
    },
    {
      title: "Contact us",
      url: "/contact",
      icon: <AlternateEmailOutlinedIcon fontSize='large' />,
    },
    {
      title: "Checkout",
      url: "/checkout",
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
            <li key={link.title}>
              <Link href={link.url} className={styles.link}>
                {link.title}
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
