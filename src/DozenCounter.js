import { useSelector } from "./redux-lite";

export const DozenCounter = () => {
  const dozen = useSelector((state) => state.counter.dozen);
  return <h3>Dozens counter: {dozen}</h3>;
};
