import React from "react";
import Card from "../Card/Card";
import styles from "./newProducts.module.scss";
import CardWrapper from "../CardWrapper/CardWrapper";
import { Data, Product } from "../../types/types";

const NewProducts = ({ allProducts }: Data) => {
  console.log(allProducts);
  return (
    <CardWrapper>
      <div className={styles.newProducts}>
        <h3>NEW</h3>
        <div className={styles.cards}>
          {allProducts.slice(0, 3).map((product: Product, i: number) => (
            <Card key={i} {...product} />
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};

export default NewProducts;
