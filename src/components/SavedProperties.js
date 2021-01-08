import React from "react";
import "../styling/propertyCard.scss";
import { FaSadTear } from "react-icons/fa";
import PropertyCard from "./PropertyCard";
import { usePropertyContext } from "../context/property_context";

const SavedProperties = () => {
  const { savedProperties, removeProperty } = usePropertyContext();
  if (savedProperties.length === 0) {
    return (
      <div aria-label="Saved properties">
        <h1 className="heading">Saved properties</h1>
        <h3>
          You have no saved properties{" "}
          <FaSadTear style={{ fontSize: "30px", color: "#69b8db" }} />
        </h3>
      </div>
    );
  }
  return (
    <div aria-label="Saved properties">
      <div className="heading">
        <h1 className="heading">Saved properties</h1>
        <h2>({savedProperties.length})</h2>
      </div>
      <hr />
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
