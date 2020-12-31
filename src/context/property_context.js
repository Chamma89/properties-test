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

  // Add to list
  // const addToCart = (id, color, amount, product) => {
  //   dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
  // };

  const removeProperty = () => {
    console.log("here");
    dispatch({ type: REMOVE_PROPERTY });
  };

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(state.cart));
  // }, [state.cart]);

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
