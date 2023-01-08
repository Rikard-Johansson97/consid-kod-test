import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import styles from "./dropmenu.module.scss";
import MenuItem from "./MenuItem/MenuItem";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
const DropMenu = (props: any) => {
  const items = useSelector((state: any) => state[props.data.keyValue]);
  console.log(items);
  return (
    <div className={styles.DropMenu}>
      <div className={styles.header}>
        <p className={styles.title}>
          {props.data.title}
          <span> ({items.length})</span>
        </p>
        <Link href='/checkout' className={styles.viewAll}>
          View All
        </Link>
        <div className={styles.closeMenu}>
          <IconButton onClick={() => props.toggleDropMenu(false)}>
            <CloseIcon fontSize='large' />
          </IconButton>
        </div>
      </div>
      <div className={styles.cartItems}>
        {items
          ? items.map((item: any, index: any) => (
              <MenuItem key={index} {...item} {...props.data} />
            ))
          : null}
      </div>
      {props.data.btn && (
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
