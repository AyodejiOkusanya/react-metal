import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const ExpandableContext = createContext({});

const { Provider } = ExpandableContext;

type ExpandableProps = {
  children: JSX.Element;
  onExpand: (expanded: boolean) => void;
};

const Expandable = ({ children, onExpand }: ExpandableProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(
    () => setExpanded((prevExpanded) => !prevExpanded),
    []
  );

  const componentJustMounted = useRef(true);
  useEffect(() => {
    if (!componentJustMounted.current) {
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
