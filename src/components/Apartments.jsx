import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import Apartment from './Apartment';

import './styles/Apartments.css';

const Apartments = (props) => {
  const { products } = props;

  return (
    <div className="Products">
      <div className="ProductsItems">
        {products.map(product => (
          <Apartment
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Apartments);
