import React from "react";
import "../styling/propertyCard.scss";
import PropertyCard from "./PropertyCard";
import { usePropertyContext } from "../context/property_context";

const Results = () => {
  const { results } = usePropertyContext();
  return (
    <div>
      {results.map((property) => {
        return <PropertyCard property={property} />;
      })}
    </div>
  );
};

export default Results;
