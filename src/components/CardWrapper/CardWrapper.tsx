import React from "react";
import styles from "./cardWrapper.module.scss";

type Props = {
  children: React.ReactNode;
};

const CardWrapper = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.newProducts}>{children}</div>
    </div>
  );
};

export default CardWrapper;
