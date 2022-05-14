import { ReactNode, useContext } from "react";
import { ExpandableContext } from "./Expandable";

type HeaderProps = {
  children: ReactNode;
};

export const Header = ({ children }: HeaderProps) => {
  return <div>{children}</div>;
};
