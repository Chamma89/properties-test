import React from "react";
import "../styling/propertyCard.scss";
import PropertyCard from "./PropertyCard";
import { usePropertyContext } from "../context/property_context";

const Results = () => {
  const { results } = usePropertyContext();
  return (
    <div>
      <div className="heading">
        <h1 className="heading">Results</h1>
        <h2>({results.length})</h2>
      </div>
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
