const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';
const localStorage = typeof window !== 'undefined' ? window.localStorage : null;

export const setAuthorization = (token: string) => localStorage?.setItem(ACCESS_TOKEN_KEY, token);

export const getAuthorization = () => localStorage?.getItem(ACCESS_TOKEN_KEY) ?? '';

export const getAuthorizationHeader = () => `Bearer ${getAuthorization()}`;
