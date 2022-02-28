import React, { createContext, useContext, useReducer } from "react";

//Prepares the datalayer  =>  for data variables from 1 component to another component
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
