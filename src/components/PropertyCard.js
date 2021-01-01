import React from "react";
import "../styling/propertyCard.scss";
import { usePropertyContext } from "../context/property_context";

const PropertyCard = ({ property }) => {
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
      <button className="" type="" onClick={() => removeProperty(id)}>
        Remove
      </button>
    </div>
  );
};

export default PropertyCard;
