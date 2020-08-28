import React, { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';

import { IoIosBed } from "react-icons/io";
import { FaBath, FaSign } from "react-icons/fa";
import { GiVikingLonghouse } from "react-icons/gi";


const MapEstate = (props) => {
  const { products } = props;
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 4.6560716, lng: -74.0595918 }}
    >
    {products.map(product => (
      <Marker key={product.id} position={{
        lat: product.lat,
        lng: product.lng
        }}
        onClick={() => {
          setSelectedProduct(product);
        }}
      />
    ))}

    {selectedProduct && (
      <InfoWindow
        position={{
          lat: selectedProduct.lat,
          lng: selectedProduct.lng
        }}
        onCloseClick={() => {
          setSelectedProduct(null);
        }}
        icon={{
          url: "../../public/pinboard.svg",
          scaledSize: new window.google.maps.Size(25, 25)
        }}
      >
        <div className="Products-item">
          <img src={selectedProduct.image} alt={selectedProduct.title} />
          <div className="Products-item-info">
            <h3>
              <i><GiVikingLonghouse /></i>
              {selectedProduct.title}
            </h3>
            <p>
              {selectedProduct.description}
            </p>
            <div className="Products-item-span">
              <span>
                <i><IoIosBed /></i>
                {selectedProduct.beds} Beds
              </span>
              <span>
                <i><FaBath /></i>
                {selectedProduct.baths} Baths
              </span>
              <span>
                <i><FaSign /></i>
                {selectedProduct.sqft} Sqft
              </span>
            </div>
            <div className="Products-item-price">
              <span className="title">Per Month: </span>
              <span className="price">${selectedProduct.perMonth}</span>
            </div>
          </div>
        </div>
      </InfoWindow>
    )}
    </GoogleMap>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = {
  addToMain: actions.addToMain,
};

export default withScriptjs(
  withGoogleMap(
    connect(mapStateToProps, mapDispatchToProps)(MapEstate)
  )
);
