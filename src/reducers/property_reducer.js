import { GET_PROPERTIES, REMOVE_PROPERTY, ADD_PROPERTY } from "../actions.js";

const property_reducer = (state, action) => {
  if (action.type === GET_PROPERTIES) {
    return {
      ...state,
      results: action.payload.results,
      savedProperties: action.payload.saved,
    };
  }

  if (action.type === ADD_PROPERTY) {
    const { id, mainImage, price, agency } = action.payload;
    const tempProperty = state.savedProperties.find((item) => {
      return item.id === id;
    });

    if (tempProperty) {
      return { ...state };
    }

    const newItem = {
      id,
      mainImage,
      price,
      agency,
    };
    return {
      ...state,
      savedProperties: [...state.savedProperties, newItem],
    };
  }

  if (action.type === REMOVE_PROPERTY) {
    let tempProperties = state.savedProperties.filter(
      (property) => property.id !== action.payload
    );
    return { ...state, savedProperties: tempProperties };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default property_reducer;
