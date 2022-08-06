import { useDispatch } from "./redux-lite";

export const ButtonBar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "INC"
          });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "DEC"
          });
        }}
      >
        Decrement
      </button>
    </div>
  );
};
