import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../src/components/Footer/Footer";

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <style global={true}>{`
          /* Other global styles such as 'html, body' etc... */

          html {
            background-color: #e4e5f1;
          }
          
        `}</style>
      </body>
    </Html>
  );
}
