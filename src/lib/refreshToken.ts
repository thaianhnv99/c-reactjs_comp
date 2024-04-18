import { apiClient } from './apiClient';

const refreshToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken') || 'mock';
  if (!refreshToken) throw new Error('refresh token does not exist');
  const refreshPayload = {
    refreshToken: refreshToken,
  };

  const response = await apiClient.post<{ authorizationToken: string; refreshToken: string }>(
    '/authorization/refresh',
    refreshPayload
  );

  const token = response.data.authorizationToken;
  const newRefreshToken = response.data.refreshToken;
  return [token, newRefreshToken];
};

export default refreshToken;
