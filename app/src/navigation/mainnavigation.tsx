import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigationStack } from "./appnavigation";
import { AuthStackNavigation } from "./authnavigation";
import * as secureStorage from "expo-secure-store";
import { AuthContext, setToken } from "../utils/auth/token";
import { DEFAULT_URL } from "../utils/config/constants";
import { useRefreshTokenMutation } from "../generated/graphql";

export const MainNavigation: React.FC = () => {
  const [refrshToken] = useRefreshTokenMutation();
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignOut: true,
      userToken: null,
    }
  );

  // login login :1
  // -> enter the app
  // -> check if token exist
  // -> validate token
  // ->

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken = null;
      try {
        //await secureStorage.deleteItemAsync("TOKEN");
        userToken = await secureStorage.getItemAsync("TOKEN");
        // refresh token
        if (userToken) {
          const res = await refrshToken({ variables: { token: userToken } });
          if (res.data!.refreshToken.status) {
            console.log(
              "just refreshed that token ! => ",
              res.data!.refreshToken.refreshToken
            );
            setToken(res.data!.refreshToken.token!);
            await secureStorage.setItemAsync(
              "TOKEN",
              res.data!.refreshToken.refreshToken!
            );
          } else {
            userToken = null;
          }
        }
      } catch (e) {
        // cant resolve the tokne !
      }
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (token: string) => {
        dispatch({ type: "SIGN_IN", token: token });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      {state.isLoading ? (
        <Text>Loading !</Text>
      ) : (
        <NavigationContainer>
          {state.userToken == null ? (
            <AuthStackNavigation />
          ) : (
            <AppNavigationStack />
          )}
        </NavigationContainer>
      )}
    </AuthContext.Provider>
  );
};
