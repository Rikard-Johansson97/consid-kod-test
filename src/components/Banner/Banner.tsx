/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./banner.module.scss";
import Button from "@mui/material/Button";
import Link from "next/link";
interface Props {
  data: {
    mainImage: {
      url: string;
    };
    title: string;
  };
}

const Banner = (props: Props) => {
  const data = props.data;
  return (
    <div className={styles.banner}>
      <img src={data.mainImage.url} alt={data.mainImage.url} />
      <div className={styles.text}>
        <h1>{data.title}</h1>
      </div>
    </div>
  );
};

export default Banner;
