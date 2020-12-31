import React from "react";
import { usePropertyContext } from "../context/property_context";
import PropertyCard from "../components/PropertyCard";
import "../styling/home.scss";

const HomePage = () => {
  const { results, savedProperties, removeProperty } = usePropertyContext();
  return (
    <div className="property-columns">
      <div>
        {results.map((property) => {
          return <PropertyCard key={property.id} property={property} />;
        })}
      </div>
      <div>
        {savedProperties.map((property) => {
          return <PropertyCard key={property.id} property={property} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
