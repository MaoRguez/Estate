import React from 'react';
import { IoIosBed } from "react-icons/io";
import { FaBath, FaSign } from "react-icons/fa";
import { GiVikingLonghouse } from "react-icons/gi";

const Apartment = ({ product }) => (
  <div className="Products-item">
    <img
      src={product.image}
      alt={product.title}
    />
    <div className="Products-item-info">
      <h3>
        <i><GiVikingLonghouse /></i>
        {product.title}
      </h3>
      <p>
        {product.description}
      </p>
      <div className="Products-item-span">
        <span>
          <i><IoIosBed /></i>
          {product.beds} Beds
        </span>
        <span>
          <i><FaBath /></i>
          {product.baths} Baths
        </span>
        <span>
          <i><FaSign /></i>
          {product.sqft} Sqft
        </span>
      </div>
      <div className="Products-item-price">
        <span className="title">Per Month: </span>
        <span className="price">${product.perMonth}</span>
      </div>
    </div>
  </div>
);

export default Apartment;