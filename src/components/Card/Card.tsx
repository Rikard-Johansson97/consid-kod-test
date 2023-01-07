/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./card.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import Link from "next/link";

const Card = (props: any) => {
  return (
    <Link
      href={{
        pathname: `/product/${props.id}`,
        query: {
          data: props,
        },
      }}
      as={`/product/${props.id}`}
      className={styles.card}>
      <div className={styles.cardImg}>
        {props.new && (
          <NewReleasesIcon fontSize='large' className={styles.newRelease} />
        )}
        <img src={props.mainImage.url} alt={props.name} />
      </div>
      <div className={styles.cardText}>
        <p>{props.name}</p>
        <h4>{props.name}</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non,
          eligendi.
        </p>
        <div className={styles.cardPrice}>
          <p>{props.price} kr</p>
          <div className='cardIcons'>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <ShoppingCartOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
