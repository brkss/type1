import React from "react";
import { MainNavigation } from "./src/navigation/mainnavigation";
import { StatusBar } from "react-native";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "@apollo/client";
import { onError } from "apollo-link-error";
import { ApolloLink, Observable } from "apollo-link";
import { getToken, setToken } from "./src/utils/auth/token";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwtDecode from "jwt-decode";
import { DEFAULT_URL } from "./src/utils/config/constants";
import * as secureStorage from "expo-secure-store";

const cache = new InMemoryCache({});

// send and refresh token in the background !
const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle: any;
      Promise.resolve(operation)
        .then((operation) => {
          const token = getToken();
          if (token) {
            operation.setContext({
              headers: {
                authorization: `bearer ${token}`,
              },
            });
          }
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

const link: any = new TokenRefreshLink({
  accessTokenField: "accessToken",
  isTokenValidOrUndefined: () => {
    const token = getToken();
    if (!token) return true;
    try {
      const { exp } = jwtDecode(token) as any;
      if (Date.now() >= exp * 1000) {
        return false;
      }
      return true;
    } catch {
      return false;
    }
  },
  fetchAccessToken: async () => {
    const refreshtoken = await secureStorage.getItemAsync("TOKEN");
    console.log("refresh token from storage => ", refreshtoken);
    return await fetch("http://localhost:4000/refresh_token", {
      method: "POST",
      headers: {
        refresh_token: refreshtoken!,
      },
      //credentials: "include",
    });
  },
  handleResponse: (_, __) => (response: { status: boolean; token: string }) => {
    console.log("resp responseXX => ");
    console.log("resp response => ", response);
    return {
      token: response.token,
    };
  },
  handleFetch: (accessToken) => {
    setToken(accessToken);
    console.log("access token => ", accessToken);
  },
  handleError: (err) => {
    console.warn("Your refresh token is invalid. Try to relogin");
    console.warn(err);
  },
});

const client: any = new ApolloClient({
  link: ApolloLink.from([
    link,
    onError(({ graphQLErrors, networkError }) => {
      console.log("graphql error => ", graphQLErrors);
      console.log("netword error => ", networkError);
    }),
    requestLink,
    new HttpLink({
      uri: `${DEFAULT_URL}/graphql`,
      credentials: "include",
    }),
  ]),
  cache,
});

export default function App() {
  StatusBar.setBarStyle("dark-content", true);
  return (
    <ApolloProvider client={client as any}>
      <MainNavigation />
    </ApolloProvider>
  );
}
