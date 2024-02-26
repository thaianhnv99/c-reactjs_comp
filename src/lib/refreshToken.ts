import { apiClient } from './apiClient'
import { getAuthorization, setUserProfile } from './authorization'

const refreshToken = async () => {
  const accessTokenOld = getAuthorization()

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const credentials = await apiClient.post<any>('123', { refreshToken: accessTokenOld })

    if (credentials) {
      setUserProfile(credentials.data.user)
    }

    return credentials.data.token
  } catch (error) {
    console.log(error)
  }
}

export default refreshToken
