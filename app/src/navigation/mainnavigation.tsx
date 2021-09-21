import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigationStack } from "./appnavigation";
import { AuthStackNavigation } from "./authnavigation";
import * as secureStorage from "expo-secure-store";
import { AuthContext } from "../utils/auth/token";

export const MainNavigation: React.FC = () => {
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

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken = null;
      try {
        userToken = await secureStorage.getItemAsync("TOKEN");
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
      <NavigationContainer>
        {state.userToken == null ? (
          <AuthStackNavigation />
        ) : (
          <AppNavigationStack />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
