import React from "react";
import styles from "./card.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import Link from "next/link";
import useAddToCart from "../../hooks/addToCart";
import useAddToFavorites from "../../hooks/addToFavorites";

const Card = (props: any) => {
  const addToCart = useAddToCart();
  const addToFavorites = useAddToFavorites();
  return (
    <div className={styles.card}>
      <Link href={`/product/${props.id}`}>
        <div className={styles.cardImg}>
          {props.new && (
            <NewReleasesIcon fontSize='large' className={styles.newRelease} />
          )}
          <img src={props.mainImage.url} alt={props.name} />
        </div>
      </Link>
      <div className={styles.cardText}>
        <p>{props.name}</p>
        <h4>{props.name}</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
          eligendi.
        </p>
        <div className={styles.cardPrice}>
          <p>{props.price} kr</p>
          <div className={styles.btn}>
            <IconButton
              onClick={() => {
                addToFavorites(props, 1);
              }}>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                addToCart(props, 1);
              }}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
