import React from "react";
import "../styling/propertyCard.scss";
import { usePropertyContext } from "../context/property_context";
import { FaMinusCircle, FaCheckCircle, FaStar, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const PropertyCard = ({ property, addButton }) => {
  const { removeProperty, addProperty } = usePropertyContext();
  const { id, mainImage, price, agency, isAdded } = property;
  return (
    <div
      className={`${!isAdded ? "property-card active" : "property-card"}`}
      data-testid={id}
    >
      <div
        className="property-card__header"
        style={{ background: agency.brandingColors.primary }}
      >
        <div>
          <img src={agency.logo} alt="propert image" />
          <Link to={`/property/${id}`} className="link">
            <FaSearch />
          </Link>
        </div>
      </div>
      <div className="property-card__body">
        <img src={mainImage} alt="property image" />
      </div>
      <div className="property-card__footer">
        {isAdded ? (
          <h5>
            Added to favourites <FaCheckCircle />
          </h5>
        ) : null}
        <p className="price">Price: {price}</p>
      </div>
      {addButton ? (
        <button
          className={`${
            !isAdded ? "add-remove-button add-button" : "hide-button"
          }`}
          type="button"
          onClick={() => addProperty(id, mainImage, price, agency)}
        >
          Add <FaStar />
        </button>
      ) : (
        <button
          className="add-remove-button remove-button"
          type="button"
          onClick={() => removeProperty(id)}
        >
          Remove <FaMinusCircle />
        </button>
      )}
    </div>
  );
};

export default PropertyCard;
