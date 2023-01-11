import { setContext } from "@apollo/client/link/context";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

// Set the token variable to the value of the NEXT_PUBLIC_API_KEY environment variable
const token = process.env.NEXT_PUBLIC_API_KEY

// Create an HTTP link with the URI set to the value of the NEXT_PUBLIC_HTTP_URI environment variable
const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_HTTP_URI,
});

// Set the authLink variable to the result of calling setContext with a function that adds the specified headers to the context
const authLink = setContext((_, { headers }) => {
  return {
    headers: Object.assign(headers || {}, {
      // Set the Content-Type header to application/json
      "Content-Type": "application/json",
      // Set the Accept header to application/json
      Accept: "application/json",
      // Set the Authorization header to include the token as a bearer token
      Authorization: `Bearer ${token}`,
    }),
  };
});

// Export a new ApolloClient instance with the authLink concatenated with the httpLink as the link, and a new InMemoryCache as the cache
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
