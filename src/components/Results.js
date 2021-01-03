import React from "react";
import "../styling/propertyCard.scss";
import PropertyCard from "./PropertyCard";
import { usePropertyContext } from "../context/property_context";

const Results = () => {
  const { results } = usePropertyContext();
  return (
    <div aria-label="Results">
      <h3 className="heading">Results</h3>
      <hr />
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
