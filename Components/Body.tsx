import { ReactNode, useContext } from "react";
import { ExpandableContext } from "./Expandable";

type BodyProps = {
  children: ReactNode;
};

export const Body = ({ children }: BodyProps) => {
  const { expanded } = useContext(ExpandableContext);
  return <div>{expanded && children}</div>;
};
