/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./menuItem.module.scss";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useQuantityAndTotalPrice from "../../../hooks/useQuantityAndTotalPrice";
import useRemoveFromCart from "../../../hooks/removeFromCart";
import { Product } from "../../../types/types";
import { Image } from "react-datocms";


const MenuItem = (props: Product) => {

  const { mainImage, name, keyValue, price } = props;
  const { quantity, totalPrice, increment, decrement } =
    useQuantityAndTotalPrice(props, props.quantity, price);
  const removeFromCart = useRemoveFromCart();

  return (
    <div className={styles.menuItem}>
      <div className={styles.img}>
        <Image data={mainImage.responsiveImage} />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productName}>
          <h4>{name}</h4>
          <IconButton
            className={styles.btn}
            onClick={() => removeFromCart(props, keyValue)}>
            <DeleteOutlineIcon />
          </IconButton>
        </div>
        <div className={styles.buyInfo}>
          <div className={styles.quantityBtn}>
            <IconButton className={styles.btn} onClick={() => decrement()}>
              <RemoveIcon />
            </IconButton>
            <span>{quantity}</span>
            <IconButton className={styles.btn} onClick={() => increment()}>
              <AddIcon />
            </IconButton>
          </div>
          <p className={styles.price}>{totalPrice} Kr</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
