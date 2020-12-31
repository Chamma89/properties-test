import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/property_reducer";
import { REMOVE_PROPERTY, ADD_PROPERTY } from "../actions.js";

const initialState = {
  results: [],
  savedProperties: [],
};

const PropertyContext = React.createContext();

export const PropertyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeProperty = () => {
    console.log("here");
    dispatch({ type: REMOVE_PROPERTY });
  };

  return (
    <PropertyContext.Provider value={{ ...state, removeProperty }}>
      {children}
    </PropertyContext.Provider>
  );
};
// make sure use
export const usePropertyContext = () => {
  return useContext(PropertyContext);
};
