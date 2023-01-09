import React from "react";
import { KlarnaHtml } from "../../hooks/KlarnaHtml";
import styles from "./klarnaPage.module.scss";
const KlarnaPage = (props: any) => {
  return (
    <iframe
      title='klarnaCheckout'
      className={styles.klarnaPage}
      srcDoc={KlarnaHtml(props.snippet)}
      frameBorder='0'></iframe>
  );
};

export default KlarnaPage;
