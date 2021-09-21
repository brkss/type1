import React from "react";

interface IAuthContext {
  signIn: (token: string) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = React.createContext<IAuthContext>({
  signIn: async () => {},
  signOut: () => {},
});
