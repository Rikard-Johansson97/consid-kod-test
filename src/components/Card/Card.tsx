import React from "react";
import styles from "./card.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import useAddToCart from "../../hooks/addToCart";
import useAddToFavorites from "../../hooks/addToFavorites";
import { Image } from "react-datocms";
import { useQuery } from "@apollo/client";
import { Product } from "../../types/types";
import { GET_PRODUCT } from "../../graphql/queries";

const Card = ({ id }: any) => {
  const addToCart = useAddToCart();
  const addToFavorites = useAddToFavorites();
  const { loading, error, data } = useQuery(GET_PRODUCT, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { product } = data;

  return (
    <div className={styles.card}>
      <Link href={`/product/${product.id}`}>
        <div className={styles.cardImg}>
          <Image data={product.mainImage.responsiveImage} />
        </div>
      </Link>
      <div className={styles.cardText}>
        <p>{product.name}</p>
        <h4>{product.name}</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
          eligendi.
        </p>
        <div className={styles.cardPrice}>
          <p>{product.price} kr</p>
          <div className={styles.btn}>
            <IconButton
              onClick={() => {
                addToFavorites(product, 1);
              }}>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                addToCart(product, 1);
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
