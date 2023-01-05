/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./banner.module.scss";
import Button from "@mui/material/Button";
import Link from "next/link";

const Banner = (props: any) => {
  console.log(props);
  return (
    <div className={styles.banner}>
      <img
        src={props.startpage.mainImage.url}
        alt={props.startpage.mainImage.url}
      />
      <div className={styles.text}>
        <h2>{props.startpage.title}</h2>
        <Link href='/product'>
          <Button variant='outlined'>SHOP</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
