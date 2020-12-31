import { REMOVE_PROPERTY, ADD_PROPERTY } from "../actions.js";

const property_reducer = (state, action) => {
  if (action.type === REMOVE_PROPERTY) {
    return console.log("property reducer");
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default property_reducer;
