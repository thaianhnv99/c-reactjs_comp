import { PropsWithChildren, createContext, useState } from "react";
import { AuthServices } from "../services";
import { AxiosResponse } from "axios";

const AuthContext = createContext<AuthContext>({
  user: null,
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState(() => {
    const userProfle = localStorage.getItem("userProfile");
    if (userProfle) {
      return JSON.parse(userProfle);
    }

    return null;
  });
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
