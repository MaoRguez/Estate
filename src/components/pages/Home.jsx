import React, { Fragment } from 'react';
import Apartments from '../Apartments';
import MapEstate from '../MapEstate';
import credentials from '../../credentials';
import Navbar from '../Navbar';
import Range from '../Range';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapskey}`;

const Home = () => {
  return (
    <Fragment>
      <header className="container__header">
        <Navbar />
      </header>
      <section className="container__section">
        <Range />
      </section>
      <main className="container__main">
        <Apartments />
      </main>
      <aside className="container__aside">
        <MapEstate isMarkerShown
          googleMapURL= {mapURL}
          containerElement={ <div style={{height:'100%'}} />}
          mapElement= {<div style={{height:'100%'}} />}
          loadingElement= {<p>Cargando</p>}
        />
      </aside>
    </Fragment>
  );
};

export default Home;