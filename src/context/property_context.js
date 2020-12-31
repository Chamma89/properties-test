import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/property_reducer";
import { GET_PROPERTIES, REMOVE_PROPERTY, ADD_PROPERTY } from "../actions.js";
import { property_data } from "../utils/constants";

const initialState = {
  results: [],
  savedProperties: [],
};

const PropertyContext = React.createContext();

export const PropertyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProperty = (data) => {
    let propertyData = data;
    dispatch({ type: GET_PROPERTIES, payload: propertyData });
  };

  const removeProperty = () => {
    dispatch({ type: REMOVE_PROPERTY });
  };

  useEffect(() => {
    console.log("yes");
    fetchProperty(property_data);
  }, []);

  console.log("kinda");
  return (
    <PropertyContext.Provider
      value={{ ...state, fetchProperty, removeProperty }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
// make sure use
export const usePropertyContext = () => {
  return useContext(PropertyContext);
};
