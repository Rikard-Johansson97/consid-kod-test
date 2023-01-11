import React from "react";
import { KlarnaHtml } from "../../hooks/KlarnaHtml";
import styles from "./klarnaPage.module.scss";
const KlarnaPage = (props: any) => {
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
