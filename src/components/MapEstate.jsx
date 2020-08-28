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
import Apartment from './Apartment';

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
      >
        <Apartment
          key={selectedProduct.id}
          product={selectedProduct}
        />
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
