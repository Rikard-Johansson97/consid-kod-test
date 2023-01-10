import React from "react";
import Card from "../Card/Card";
import styles from "./newProducts.module.scss";
import CardWrapper from "../CardWrapper/CardWrapper";
import { Data, Product } from "../../types/types";

type Props = {
  ids: String[];
};

const NewProducts = ({ ids }: Props) => {
  console.log("ids", ids);

  return (
    <CardWrapper>
      <div className={styles.newProducts}>
        <h3>NEW</h3>
        <div className={styles.cards}>
          {ids.map(
            (
              { id }: any,
              i: number //TODO: Fix types, Matheus?
            ) => (
              <Card key={i} id={id} />
            )
          )}
        </div>
      </div>
    </CardWrapper>
  );
};

export default NewProducts;
