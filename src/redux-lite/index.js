import { createContext, useContext, useEffect, useState } from "react";

const createStore = (reducer, initialState) => {
  let state = initialState;
  let listeners = [];

  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((l) => l(state));
  };
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};

const StoreContext = createContext({});
const Provider = ({ children, store }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const useSelector = (selector) => {
  const { getState, subscribe } = useContext(StoreContext);
  const [state, setState] = useState(selector(getState()));

  useEffect(() => {
    return () =>
      subscribe((state) => {
        setState(selector(state));
      });
  }, []);

  return state;
};

const useDispatch = () => {
  const { dispatch } = useContext(StoreContext);

  return dispatch;
};

export { createStore, combineReducers, Provider, useSelector, useDispatch };
