import React from "react";
import { usePropertyContext } from "../context/property_context";

const HomePage = () => {
  const { results, savedProperties, removeProperty } = usePropertyContext();
  console.log(results);
  console.log(savedProperties);
  return (
    <main>
      <h1>Home pages</h1>
      <button onClick={() => removeProperty()}>Test reducer</button>
    </main>
  );
};

export default HomePage;
