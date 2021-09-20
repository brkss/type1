import React from "react";

export const _token = React.createContext({ token: "" });

export const setToken = (_token: string): void => {
  //token = _token;
};

export const getToken = (): string => {
  //return token;
  return "";
};
