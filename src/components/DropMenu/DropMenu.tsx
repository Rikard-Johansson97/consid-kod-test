import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./dropmenu.module.scss";
import MenuItem from "./MenuItem/MenuItem";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { Product } from "../../types/types";

const DropMenu = ({ menuData, toggleDropMenu }: any) => {
  const items = useSelector(
    (state: any) => state[menuData.data.keyValue].items
  );

  return (
    <div className={styles.DropMenu}>
      <div className={styles.header}>
        <p className={styles.title}>
          {items.title}
          <span> ({items.length})</span>
        </p>
        <Link href='/checkout' className={styles.viewAll}>
          View All
        </Link>
        <div className={styles.closeMenu}>
          <IconButton onClick={() => toggleDropMenu(false)}>
            <CloseIcon fontSize='large' />
          </IconButton>
        </div>
      </div>
      <div className={styles.cartItems}>
        {items
          ? items.map((item: Product, i: number) => (
              <MenuItem key={i} {...item} {...menuData} />
            ))
          : null}
      </div>
      {menuData.data.btn && (
        <Link href='/checkout'>
          <Button className={styles.addToCart}>
            <ShoppingCartOutlined className={styles.cartBtn} />
            <p>Go to checkout</p>
          </Button>
        </Link>
      )}
    </div>
  );
};

export default DropMenu;
