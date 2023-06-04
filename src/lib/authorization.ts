import Cookies from "js-cookie";

const ACCESS_TOKEN_KEY = 'Authentication';
const USER_PROFILE_KEY = 'Userprofile';

const localStorage = typeof window !== 'undefined' ? window.localStorage : null;

export const setAuthorization = (token: string) => Cookies.set(ACCESS_TOKEN_KEY, token);

export const getAuthorization = () => Cookies.get(ACCESS_TOKEN_KEY) ?? '';

export const getAuthorizationHeader = () => `Bearer ${getAuthorization()}`;

export const setUserprofile = (user: User) => localStorage?.setItem(USER_PROFILE_KEY, JSON.stringify(user));

export const getUserprofile = () => localStorage?.getItem(USER_PROFILE_KEY) ?? '';