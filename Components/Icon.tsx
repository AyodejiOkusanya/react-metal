import { useContext } from "react";
import { ExpandableContext } from "./Expandable";

export const Icon = () => {
  const { expanded, toggle } = useContext(ExpandableContext);

  return <div onClick={toggle}>{expanded ? "-" : "+"}</div>;
};
