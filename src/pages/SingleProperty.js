import React, { useEffect } from "react";
import "../styling/HeaderAndFooter.scss";
import { useParams } from "react-router-dom";
import { usePropertyContext } from "../context/property_context";

const SingleProperty = () => {
  const { id: id } = useParams();
  const {
    results,
    fetchProperty,
    fetchSingleProperty,
    singleProperty,
  } = usePropertyContext();

  console.log(id);

  useEffect(() => {
    fetchProperty(results);
    fetchSingleProperty(id, results);
  }, []);

  console.log(singleProperty);

  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SingleProperty;
