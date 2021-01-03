import React from "react";
import "../styling/propertyCard.scss";
import PropertyCard from "./PropertyCard";
import { usePropertyContext } from "../context/property_context";

const Results = () => {
  const { results } = usePropertyContext();
  console.log(results);
  return (
    <div aria-label="Results">
      <h1 className="heading">Results ({results.length})</h1>
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
