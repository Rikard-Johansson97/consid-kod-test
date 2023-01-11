import React from "react";
import { KlarnaHtml } from "../../hooks/useKlarnaHtml";
import { Page } from "../../types/types";
import styles from "./klarnaPage.module.scss";
const KlarnaPage = (props: any) => {
  console.log(JSON.stringify(props.snippet));

  return (
    <div className={styles.klarnaPage}>
      <iframe
        title='klarnaCheckout'
        srcDoc={KlarnaHtml(props.snippet)}
        frameBorder='0'></iframe>
    </div>
  );
};

export default KlarnaPage;
