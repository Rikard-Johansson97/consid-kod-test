/* eslint-disable jsx-a11y/alt-text */
import { Image } from "react-datocms";
import React from "react";
import styles from "./banner.module.scss";
import { ResponsiveImageType } from "react-datocms";

type Props = {
  mainImage: {
    responsiveImage: ResponsiveImageType;
  };
  title: string;
};

const Banner = ({ mainImage, title }: Props) => {
  return (
    <div className={styles.banner}>
      <Image data={mainImage.responsiveImage} />
      <div className={styles.text}>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
