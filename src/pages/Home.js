import React from "react";
import { property_data } from "../utils/constants";
import { usePropertyContext } from "../context/property_context";

const HomePage = () => {
  const { removeProperty } = usePropertyContext();

  return (
    <main>
      <h1>Home pages</h1>
      <button onClick={() => removeProperty()}>Test reducer</button>
    </main>
  );
};

export default HomePage;
