import "../src/styles/globals.scss";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import store from "../src/store/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "../src/apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='root'>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </div>
  );
}
