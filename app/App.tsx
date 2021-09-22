import React from "react";
import { MainNavigation } from "./src/navigation/mainnavigation";
import { StatusBar } from "react-native";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "@apollo/client";
import { onError } from "apollo-link-error";
import { AuthContext } from "./src/utils/auth/token";

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message));
});

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
}) as any;

const client = new ApolloClient({
  link: errorLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  StatusBar.setBarStyle("dark-content", true);
  return (
    <ApolloProvider client={client as any}>
      <MainNavigation />
    </ApolloProvider>
  );
}
