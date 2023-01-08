import "../src/styles/globals.scss";
import "../src/styles/utilities/reset.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import store from "../src/store/store";
import { ApolloProvider } from "@apollo/client";
import { client } from "../src/client/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}
