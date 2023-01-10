import React, { useState } from "react";
import styles from "./product.module.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import useAddToCart from "../../../hooks/addToCart";
import useQuantityAndTotalPrice from "../../../hooks/useQuantityAndTotalPrice";
import { Product } from "../../../types/types";
import { Image } from "react-datocms";

const ProductPage = ({ product }: Product) => {
  const { quantity, totalPrice, increment, decrement } =
    useQuantityAndTotalPrice(product, 1, product.price);
  const addToCart = useAddToCart();

  return (
    <div className={styles.wrapper}>
      <div className={styles.productPage}>
        <div className={styles.img}>
          <Image
            className={styles.mainImg}
            data={product.mainImage.responsiveImage}></Image>
          {product.alternativeImages.map((img: any, i: any) => (
            <div key={i} className={styles.alternative}>
              <Image
                data={img.responsiveImage}
                className={styles.altImg}></Image>
            </div>
          ))}
        </div>
        <div className={styles.productInfo}>
          <div>
            <h3 className={styles.title}>{product.name}</h3>
            <p className={styles.category}>{product.name}</p>
            <div className={styles.priceInfo}>
              <div className={styles.price}>
                <p>Price</p>
                <span>{product.price} Kr</span>
              </div>
              <div className={styles.quantity}>
                <p>Quantity</p>
                <div className={styles.quantityBtn}>
                  <IconButton
                    className={styles.btn}
                    onClick={() => decrement()}>
                    <RemoveIcon />
                  </IconButton>
                  <span>{quantity}</span>
                  <IconButton
                    className={styles.btn}
                    onClick={() => increment()}>
                    <AddIcon />
                  </IconButton>
                </div>
              </div>
            </div>
            <div className={styles.description}>
              <Button className={styles.btn}>Description</Button>
              <Button className={styles.btn}>Details</Button>
            </div>
            <p className={styles.productDetails}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              omnis eum maiores incidunt quod ipsam fugit ducimus eveniet!
              Officia, harum.
            </p>
          </div>
          <div>
            <div className={styles.buyInfo}>
              <div className={styles.totalPrice}>
                <p>Total Price</p>
                <span>{totalPrice} Kr</span>
              </div>
              <Button
                onClick={() => {
                  addToCart(product, quantity);
                }}
                className={styles.addToCart}>
                <ShoppingCartOutlined className={styles.cartBtn} />
                <p>Add to Cart</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
