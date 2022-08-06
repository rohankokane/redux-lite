import { createStore } from "./redux-lite";

const counterReducer = (state = { count: 0, dozen: 0 }, action) => {
  switch (action.type) {
    case "INC": {
      return {
        ...state,
        count: state.count + 1,
        dozen: Math.floor((state.count + 1) / 12)
      };
    }
    case "DEC": {
      return {
        ...state,
        count: state.count - 1,
        dozen: Math.floor((state.count - 1) / 12)
      };
    }
    default:
      return state;
  }
};

export const store = createStore(counterReducer);
