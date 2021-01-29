import {
  GET_PROPERTIES,
  GET_SINGLE_PROPERTY,
  REMOVE_PROPERTY,
  ADD_PROPERTY,
} from "../actions.js";

const property_reducer = (state, action) => {
  if (action.type === GET_PROPERTIES) {
    return {
      ...state,
      results: action.payload.results,
      savedProperties: action.payload.saved,
    };
  }

  if (action.type === GET_SINGLE_PROPERTY) {
    let singlePropertyFiltered = action.payload.propertyData.results.filter(
      (property) => property.id === action.payload.id
    );

    if (singlePropertyFiltered.length === 0) {
      singlePropertyFiltered = action.payload.propertyData.saved.filter(
        (property) => property.id === action.payload.id
      );
    }

    return { ...state, singleProperty: singlePropertyFiltered };
  }

  if (action.type === ADD_PROPERTY) {
    const { id, mainImage, price, agency } = action.payload;
    const tempProperty = state.savedProperties.find((item) => {
      return item.id === id;
    });

    // To prevent re-adding the same property
    if (tempProperty) {
      return { ...state };
    }

    const newItem = {
      price,
      agency,
      id,
      mainImage,
    };

    state.results.map((property) => {
      if (property.id === newItem.id) {
        property["isAdded"] = true;
      }
    });

    return {
      ...state,
      savedProperties: [...state.savedProperties, newItem],
    };
  }

  if (action.type === REMOVE_PROPERTY) {
    let tempProperties = state.savedProperties.filter(
      (property) => property.id !== action.payload
    );

    state.results.map((property) => {
      if (property.id === action.payload) {
        property["isAdded"] = false;
      }
    });

    return { ...state, savedProperties: tempProperties };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default property_reducer;
