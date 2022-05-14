import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const initialContext = {
  expanded: false,
  toggle: () => {},
};

export const ExpandableContext = createContext(initialContext);

const { Provider } = ExpandableContext;

type ExpandableProps = {
  children: ReactNode;
  onExpand?: (expanded: boolean) => void;
};

const Expandable = ({ children, onExpand }: ExpandableProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  const componentJustMounted = useRef(true);
  useEffect(() => {
    if (!componentJustMounted.current && onExpand) {
      onExpand(expanded);
    } else {
      componentJustMounted.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded]);

  const value = useMemo(() => ({ expanded, toggle }), [expanded, toggle]);

  return <Provider value={value}>{children}</Provider>;
};

export default Expandable;
