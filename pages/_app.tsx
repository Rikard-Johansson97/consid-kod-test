import "../src/styles/globals.scss";
import "../src/styles/utilities/reset.css";
import type { AppProps } from "next/app";
import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const token = "e75dd9f5b446cb431814bda5c6adb8";
const httpLink = createHttpLink({
  uri: "https://graphql.datocms.com/",
});
const authLink = setContext((_, { headers }) => {
  return {
    headers: Object.assign(headers || {}, {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    }),
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
