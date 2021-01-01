import React from "react";
import "../styling/propertyCard.scss";
import { usePropertyContext } from "../context/property_context";
import { FaPlus, FaTimes, FaTrash } from "react-icons/fa";

const PropertyCard = ({ property, addButton }) => {
  const { removeProperty, addProperty } = usePropertyContext();
  const { id, mainImage, price, agency } = property;
  return (
    <div className="property-card">
      <div
        className="property-card__header"
        style={{ background: agency.brandingColors.primary }}
      >
        <img src={agency.logo} alt="" />
      </div>
      <div className="property-card__body">
        <img src={mainImage} alt="property image" />
      </div>
      <div className="property-card__footer">Price: {price}</div>
      {addButton ? (
        <button
          className="add-remove-button add-button"
          type="button"
          onClick={() => addProperty(id, mainImage, price, agency)}
        >
          Add <FaPlus />
        </button>
      ) : (
        <button
          className="add-remove-button remove-button"
          type="button"
          onClick={() => removeProperty(id)}
        >
          Remove <FaTrash />
        </button>
      )}
    </div>
  );
};

export default PropertyCard;
