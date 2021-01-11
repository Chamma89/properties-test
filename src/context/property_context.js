import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/property_reducer";
import { property_data } from "../utils/constants";
import {
  GET_PROPERTIES,
  REMOVE_PROPERTY,
  ADD_PROPERTY,
  GET_SINGLE_PROPERTY,
} from "../actions.js";

const initialState = {
  results: [
    {
      id: null,
      agency: {
        brandingColors: { primary: null },
      },
    },
  ],
  savedProperties: [],
  singleProperty: [
    {
      id: null,
      agency: {
        brandingColors: { primary: null },
      },
    },
  ],
};

const PropertyContext = React.createContext();

export const PropertyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProperty = (data) => {
    let propertyData = data;
    dispatch({ type: GET_PROPERTIES, payload: propertyData });
  };

  const fetchSingleProperty = (id) => {
    let propertyData = property_data;
    dispatch({ type: GET_SINGLE_PROPERTY, payload: { id, propertyData } });
  };

  const addProperty = (id, mainImage, price, agency) => {
    dispatch({ type: ADD_PROPERTY, payload: { id, mainImage, price, agency } });
  };

  const removeProperty = (id) => {
    dispatch({ type: REMOVE_PROPERTY, payload: id });
  };

  useEffect(() => {
    fetchProperty(property_data);
  }, []);

  return (
    <PropertyContext.Provider
      value={{
        ...state,
        fetchProperty,
        fetchSingleProperty,
        addProperty,
        removeProperty,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
// make sure use
export const usePropertyContext = () => {
  return useContext(PropertyContext);
};
