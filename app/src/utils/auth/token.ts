let token = "";

export const setToken = (_token: string): void => {
  token = _token;
};

export const getToken = (): string => {
  return token;
};
