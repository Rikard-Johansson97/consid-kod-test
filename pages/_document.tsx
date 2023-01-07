import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <style tsx global>{`
          /* Other global styles such as 'html, body' etc... */

          html {
            background-color: #e4e5f1;
          }
        `}</style>
      </body>
    </Html>
  );
}
