import React from "react";
import "../styling/propertyCard.scss";
import PropertyCard from "./PropertyCard";
import { usePropertyContext } from "../context/property_context";

const Results = () => {
  const { results } = usePropertyContext();
  return (
    <div>
      <h3>Results</h3>
      {results.map((property) => {
        return (
          <PropertyCard
            property={property}
            key={property.id}
            addButton={true}
          />
        );
      })}
    </div>
  );
};

export default Results;
