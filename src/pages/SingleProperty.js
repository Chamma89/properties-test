import React, { useEffect } from "react";
import "../styling/HeaderAndFooter.scss";
import { useParams } from "react-router-dom";
import { usePropertyContext } from "../context/property_context";

const SingleProperty = () => {
  const { id: id } = useParams();
  const { fetchSingleProperty, singleProperty } = usePropertyContext();

  useEffect(() => {
    console.log("getting dat id");
    fetchSingleProperty(id);
  }, []);

  console.log(singleProperty);

  return (
    <div>
      <div>{singleProperty[0].price}</div>
      <div></div>
    </div>
  );
};

export default SingleProperty;
