import React from "react";
import { usePropertyContext } from "../context/property_context";
import PropertyCard from "../components/PropertyCard";
import "../styling/home.scss";
import Results from "../components/Results";
import SavedProperties from "../components/SavedProperties";

const HomePage = () => {
  const { results, savedProperties, removeProperty } = usePropertyContext();
  console.log(results);
  return (
    <div className="property-columns">
      <div>
        <Results />
      </div>
      <div>
        <SavedProperties />
      </div>
    </div>
  );
};

export default HomePage;
