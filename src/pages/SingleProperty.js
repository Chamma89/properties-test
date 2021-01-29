import React, { useEffect } from "react";
import "../styling/SingleProperty.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { usePropertyContext } from "../context/property_context";

const SingleProperty = () => {
  const { id: id } = useParams();
  const { fetchSingleProperty, singleProperty } = usePropertyContext();

  useEffect(() => {
    fetchSingleProperty(id);
  }, []);

  const {
    id: propId,
    price,
    mainImage,
    agency: {
      logo,
      brandingColors: { primary },
    },
  } = singleProperty[0];

  return (
    <div className="section single-property-page">
      <Link to={`/`} className="link btn">
        Back to properties
      </Link>
      <div className="split-section">
        <section>
          <img src={mainImage} alt="Property image" />
          <h2>{price}</h2>
        </section>
        <section>
          <img src={logo} alt="property logo" />
          <hr />
          <p>
            House <span>number {propId}</span> is a beautifully appointed{" "}
            {propId} bedroom apartment in Toorak Place on the second floor,
            boasting a private balcony and secure undercover parking. Perfect
            for those who dream of style and location. The clean lines and
            neutral tones throughout allow you to decorate just how you like!
            Located in the heart of Toorak Village above shops, restaurants,
            banks and medical centres and with trams and buses within an easy
            walk, this is sure to be the perfect addition to your retirement.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SingleProperty;
