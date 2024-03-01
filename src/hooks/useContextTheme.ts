import { useContext } from 'react';
import { ThemeContext } from 'src/shared/theme-context';

// Mục đích để check giá trị context
const useContextTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};

export default useContextTheme;
