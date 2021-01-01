import React from "react";
import "../styling/propertyCard.scss";
import { usePropertyContext } from "../context/property_context";
import { FaPlus, FaStar, FaTrash } from "react-icons/fa";

const PropertyCard = ({ property, addButton }) => {
  const { removeProperty, addProperty } = usePropertyContext();
  const { id, mainImage, price, agency, isAdded } = property;
  return (
    <div className={`${!isAdded ? "property-card active" : "property-card"}`}>
      <div
        className="property-card__header"
        style={{ background: agency.brandingColors.primary }}
      >
        <img src={agency.logo} alt="" />
      </div>
      <div className="property-card__body">
        <img src={mainImage} alt="property image" />
      </div>
      <div className="property-card__footer">
        {isAdded ? (
          <h5>
            Added to favourites <FaStar />
          </h5>
        ) : null}
        Price: {price}
      </div>
      {addButton ? (
        <button
          className={`${
            !isAdded ? "add-remove-button add-button" : "hide-button"
          }`}
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
