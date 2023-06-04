import { apiClient } from "./apiClient";
import { getAuthorization, setUserprofile } from "./authorization"

const refreshToken = async () => {
    const accessTokenOld = getAuthorization();

    try {
        const credentials = await apiClient.post<any>('123', { refreshToken: accessTokenOld });

        if (credentials) {
            setUserprofile(credentials.data.user)
        }

        return credentials.data.token
    } catch (error) {

    }
}

export default refreshToken