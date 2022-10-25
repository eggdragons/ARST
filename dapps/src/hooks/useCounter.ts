import { Dispatch, SetStateAction, useCallback, useState } from "react";

type ReturnType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: Dispatch<SetStateAction<number>>;
  setMaxCount: Dispatch<SetStateAction<number>>;
  setMinCount: Dispatch<SetStateAction<number>>;
};

export type CounterSetType = {
  initMaxCount: number;
  initMinCount: number;
  initialValue?: number;
};

export const useCounter = ({
  initMaxCount,
  initMinCount,
  initialValue,
}: CounterSetType): ReturnType => {
  const [count, setCount] = useState(initialValue || 1);
  const [maxCount, setMaxCount] = useState(initMaxCount);
  const [minCount, setMinCount] = useState(initMinCount);

  const increment = useCallback(() => {
    setCount((x) => Math.min(maxCount, x + 1));
  }, [maxCount]);

  const decrement = useCallback(() => {
    setCount((x) => Math.max(minCount, x - 1));
  }, [minCount]);

  const reset = () => setCount(initialValue || 0);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
    setMaxCount,
    setMinCount,
  };
};
