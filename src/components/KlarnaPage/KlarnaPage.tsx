import React from "react";
import { KlarnaHtml } from "../../hooks/useKlarnaHtml";
import styles from "./klarnaPage.module.scss";
interface KlarnaSnippet {
  snippet: {
    id: string;
    style: string;
    content: string;
    reloadCheckoutHandler: () => void;
  };
}

const KlarnaPage = (props: KlarnaSnippet) => {
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
