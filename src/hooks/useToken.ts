import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    return "token";
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (newToken: any) => {
    // handle
    setToken(newToken);
  };

  return {
    setToken: saveToken,
    token,
  };
}
