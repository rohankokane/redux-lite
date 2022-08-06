import { useSelector } from "./redux-lite";

export const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  return <h3>Counter: {count}</h3>;
};
