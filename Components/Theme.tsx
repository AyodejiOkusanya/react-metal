import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useComponentDidUpdate } from "../hooks/useComponentDidUpdate";
import styles from "../styles/Theme.module.css";

const initialContext = {
  isDarkMode: false,
  toggle: () => {},
};

export const ThemeContext = createContext(initialContext);

const { Provider } = ThemeContext;

type ThemeProps = {
  children: ReactNode;
  onThemeChange?: (theme: boolean) => void;
};

const Theme = ({ children, onThemeChange }: ThemeProps) => {
  const [isDarkMode, setTheme] = useState(false);

  const toggle = useCallback(() => setTheme((prevMode) => !prevMode), []);

  const componentJustMounted = useRef(true);

  useComponentDidUpdate(() => {
    if (onThemeChange) {
      onThemeChange(isDarkMode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

  useEffect(() => {
    if (!componentJustMounted.current && onThemeChange) {
      onThemeChange(isDarkMode);
    } else {
      componentJustMounted.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkMode]);

  const value = useMemo(() => ({ isDarkMode, toggle }), [isDarkMode, toggle]);

  return (
    <Provider value={value}>
      <div
        className={`${styles.theme} ${
          isDarkMode ? styles.themeDarkMode : styles.themeLightMode
        }`}
      >
        {children}
      </div>
    </Provider>
  );
};

export default Theme;
