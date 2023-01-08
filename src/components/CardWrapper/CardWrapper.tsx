import React from "react";
import styles from "./cardWrapper.module.scss";

const CardWrapper = (props: any) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.newProducts}>{props.children}</div>
    </div>
  );
};

export default CardWrapper;
