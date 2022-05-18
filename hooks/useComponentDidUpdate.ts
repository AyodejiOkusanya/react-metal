import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export const useComponentDidUpdate = (
  fn: EffectCallback,
  deps: DependencyList | undefined
) => {
  const componentJustMounted = useRef(true);
  useEffect(() => {
    if (!componentJustMounted) {
      fn();
      return;
    }
    componentJustMounted.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
