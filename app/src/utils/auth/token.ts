import React from "react";

interface IAuthContext {
  signIn: (token: string) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = React.createContext<IAuthContext>({
  signIn: async () => {},
  signOut: () => {},
});

let token: string = "";

export const setToken = (_token: string) => {
  token = _token;
};
export const getToken = () => {
  return token;
};
