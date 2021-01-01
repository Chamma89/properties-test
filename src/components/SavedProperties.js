import React from "react";
import "../styling/propertyCard.scss";
import PropertyCard from "./PropertyCard";
import { usePropertyContext } from "../context/property_context";

const SavedProperties = () => {
  const { savedProperties, removeProperty } = usePropertyContext();
  if (savedProperties.length === 0) {
    return (
      <div>
        <h3>Saved properties</h3>
        <h3>You have no saved properties</h3>
      </div>
    );
  }
  return (
    <div>
      <h3>Saved properties</h3>
      {savedProperties.map((property) => {
        return (
          <PropertyCard
            property={property}
            key={property.id}
            addButton={false}
          />
        );
      })}
    </div>
  );
};

export default SavedProperties;
