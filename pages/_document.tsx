import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <style global={true}>{`
          /* Other global styles such as 'html, body' etc... */

          html {
            background-color: #e4e5f1;
            
          }
          *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            text-decoration: none;
            
            list-style: none;
          }
          
        `}</style>
      </body>
    </Html>
  );
}
