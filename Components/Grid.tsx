import { ReactNode } from "react";
import styles from "../styles/Grid.module.css";

type GridProps = {
  children: ReactNode;
};

export const Grid = ({ children }: GridProps) => {
  return <div className={styles.grid}>{children}</div>;
};
