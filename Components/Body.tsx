import { useContext } from "react";
import { ThemeContext } from "./Theme";

export const Body = () => {
  const { isDarkMode } = useContext(ThemeContext);
  return <div>{isDarkMode ? `I'm in dark mode` : `I'm in light mode`}</div>;
};
