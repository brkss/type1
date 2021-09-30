import React from "react";
import ReactDOM from "react-dom";
import { Application } from "./Application";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client: any = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Application />
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
