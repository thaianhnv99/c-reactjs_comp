const ACCESS_TOKEN_KEY = 'Authentication';
const USER_PROFILE_KEY = 'Userprofile';

const localStorage = typeof window !== 'undefined' ? window.localStorage : null;

export const setAuthorization = (token: string) =>
  localStorage?.setItem(ACCESS_TOKEN_KEY, JSON.stringify(token));

export const getAuthorization = () => localStorage?.getItem(ACCESS_TOKEN_KEY) ?? '';

export const getAuthorizationHeader = () => `Bearer ${getAuthorization()}`;

export const setUserProfile = (user: User | null) =>
  localStorage?.setItem(USER_PROFILE_KEY, JSON.stringify(user));

export const getUserProfile = () => localStorage?.getItem(USER_PROFILE_KEY) ?? '';
