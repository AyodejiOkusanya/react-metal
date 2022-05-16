import { useContext } from "react";
import { ThemeContext } from "./Theme";
import styles from "../styles/ThemeButton.module.css";

type ThemeButtonProps = {
  className?: string;
};

export const ThemeButton = ({
  className = "",
  ...otherProps
}: ThemeButtonProps) => {
  const { isDarkMode, toggle } = useContext(ThemeContext);
  const dynamicStyles = {
    backgroundColor: `${isDarkMode ? "white" : "black"}`,
  };
  const combinedClassNames = [styles.themeButton, className];

  return (
    <button
      className={styles.themeButton}
      // style={dynamicStyles}
      onClick={toggle}
      {...otherProps}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
