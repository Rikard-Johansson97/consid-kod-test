/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./menuItem.module.scss";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Image } from "react-datocms";
import {
  removeFromCart,
  updateQuantity,
  removeFromFavorite,
} from "../../../store/reducers";
import { useDispatch } from "react-redux";
import { Product } from "../../../types/types";

const MenuItem = (props: Product) => {
  const dispatch = useDispatch();
  const { mainImage, name, keyValue, price, quantity } = props;

  return (
    <div className={styles.menuItem}>
      <div className={styles.img}>
        <Image data={mainImage.responsiveImage} />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productName}>
          <h4>{name}</h4>
          {keyValue === "cart" ? (
            <IconButton
              className={styles.btn}
              onClick={() => dispatch(removeFromCart(props))}>
              <DeleteOutlineIcon />
            </IconButton>
          ) : (
            <IconButton
              className={styles.btn}
              onClick={() => dispatch(removeFromFavorite(props))}>
              <DeleteOutlineIcon />
            </IconButton>
          )}
        </div>
        <div className={styles.buyInfo}>
          <div className={styles.quantityBtn}>
            <IconButton
              className={styles.btn}
              onClick={() =>
                quantity > 1 &&
                dispatch(updateQuantity({ productId: props.id, quantity: -1 }))
              }>
              <RemoveIcon />
            </IconButton>
            <span>{quantity}</span>
            <IconButton
              className={styles.btn}
              onClick={() =>
                dispatch(updateQuantity({ productId: props.id, quantity: 1 }))
              }>
              <AddIcon />
            </IconButton>
          </div>
          <p className={styles.price}>{quantity * price} Kr</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
