import { useContext } from "react";
import { ThemeContext } from "./Theme";
import "../styles/ThemeButton.module.css";

type ThemeButtonProps = {
  className?: string;
};

export const ThemeButton = ({ className = "" }: ThemeButtonProps) => {
  const { isDarkMode, toggle } = useContext(ThemeContext);
  const classNames = ["theme-button", className];

  return (
    <button className={classNames.join(" ")} onClick={toggle}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
