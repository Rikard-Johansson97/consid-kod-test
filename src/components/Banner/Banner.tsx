import { Image } from "react-datocms";
import React from "react";
import styles from "./banner.module.scss";

const Banner = (props: any) => {
  console.log(props);
  return (
    <div className={styles.banner}>
      <Image data={props.mainImage.responsiveImage} />
      <div className={styles.text}>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default Banner;
