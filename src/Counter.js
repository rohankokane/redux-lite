import { useSelector } from "./redux-lite";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  return <h3>Counter: {count}</h3>;
};
