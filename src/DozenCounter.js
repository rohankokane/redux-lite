import { useSelector } from "./redux-lite";

export const DozenCounter = () => {
  const dozenCount = useSelector((state) => state.dozen);
  return <h3>Dozens counter: {dozenCount}</h3>;
};
