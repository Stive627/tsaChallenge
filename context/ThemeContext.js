import { createContext, useContext, useState, } from "react";
import {useColorScheme} from 'react-native'
const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
    const userTheme = useColorScheme()
  const [theme, setTheme] = useState(userTheme);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        handleTheme: () => setTheme(theme === 'light' ? 'dark':'light'),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme= () => useContext(ThemeContext)