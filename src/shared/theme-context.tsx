import { type ReactNode, createContext, useState } from 'react';

type ThemeColor = 'light' | 'black';
type ThemeContextType = {
  theme: ThemeColor;
  setTheme: React.Dispatch<React.SetStateAction<ThemeColor>>;
};
export const ThemeContext = createContext<ThemeContextType | null>(null);
const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeColor>('light');
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
