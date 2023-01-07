/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./product.module.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
const ProductPage = (props: any) => {
  const product = props.product;
  const [active, setActive] = useState();

  return (
    <div className={styles.wrapper}>
      <div className={styles.productPage}>
        <div className={styles.img}>
          <img src={product.mainImage.url} alt={product.mainImage.alt} />
          {product.alternativeImages.map((img: any, index: any) => (
            <div key={index} className={styles.alternative}>
              <img src={img.url} alt={img.alt}></img>
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
                  <IconButton className={styles.btn}>
                    <RemoveIcon />
                  </IconButton>
                  <span>0</span>
                  <IconButton className={styles.btn}>
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
                <span>NaN Kr</span>
              </div>
              <Button className={styles.addToCart}>
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
