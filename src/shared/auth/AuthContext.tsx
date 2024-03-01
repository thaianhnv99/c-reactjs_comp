import { type PropsWithChildren, createContext, useState } from 'react';

const AuthContext = createContext<AuthContext>({
  user: null,
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user] = useState(() => {
    const userProfle = localStorage.getItem('userProfile');
    if (userProfle) {
      return JSON.parse(userProfle);
    }

    return null;
  });
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
