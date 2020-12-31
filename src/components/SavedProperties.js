import React from "react";
import "../styling/propertyCard.scss";
import PropertyCard from "./PropertyCard";
import { usePropertyContext } from "../context/property_context";

const SavedProperties = () => {
  const { savedProperties, removeProperty } = usePropertyContext();
  return (
    <div>
      {savedProperties.map((property) => {
        return <PropertyCard property={property} />;
      })}
    </div>
  );
};

export default SavedProperties;
