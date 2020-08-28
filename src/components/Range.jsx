import React, { Fragment } from 'react';
import './styles/Range.css';

const Range = () => (
  <Fragment>
    <div className="container__box propertyType">
      <h3>Property Type</h3>
        <button className="btn A">Apertment</button>
        <button className="btn T">Townhouse</button>
        <button className="btn W">Whole Buiding</button>
        <button className="btn B">Whole Buiding</button>
    </div>
    <div className="container__box price">
      <h3>Price Monthly</h3>
      <span>Range Price</span>
    </div>
    <div className="container__box bedrooms">
      <h3>Bedrooms</h3>
      <button className="btn">Studio</button>
      <button className="btn one">1</button>
      <button className="btn two">2</button>
      <button className="btn three">3</button>
      <button className="btn four">4</button>
    </div>
    <div className="container__box propertySize">
      <h3>Property Size</h3>
      <span>Range size</span>
    </div>
    <div className="container__box funishing">
      <h3>Funishing</h3>
      <div className="container__box-btn">
        <button className="btn">Funishing</button>
        <button className="btn">Unfunishing</button>
      </div>
    </div>
    <div className="container__box armenities">
      <h3>Armenities</h3>
      <div className="container__checkbox">
        <span>Broadband: </span>
        <input type="checkbox" name="broadband" checked="yes"/>
      </div>
      <div className="container__checkbox">
        <span>Intercom</span>
        <input type="checkbox" name="intercom"/>
      </div>
    </div>
    <div className="container__box-btn">
      <button className="btn">Reset</button>
      <button className="btn">Apply</button>
    </div>
  </Fragment>
);

export default Range;