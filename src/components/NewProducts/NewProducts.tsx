import React from "react";
import Card from "../Card/Card";
import styles from "./newProducts.module.scss";

const NewProducts = (props: any) => {
  const sortedProducts = props.allProducts.slice().sort((a: any, b: any) => {
    // Convert the createdAt values to Date objects for comparison
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    // If dateA is earlier than dateB, return -1 (i.e. place dateA before dateB)
    if (dateA < dateB) return -1;
    // If dateA is later than dateB, return 1 (i.e. place dateA after dateB)
    if (dateA > dateB) return 1;
    // If dateA and dateB are the same, return 0 (i.e. leave them in their current order)
    return 0;
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.newProducts}>
        <h3>NEW</h3>
        <div className={styles.cards}>
          {sortedProducts.slice(0, 3).map((product: any, index: Number) => (
            <Card new={true} key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
