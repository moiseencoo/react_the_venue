import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/feautured';
import VenueInfo from './components/venue_info';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

function App() {
  return (
    <div className="App" >
      <Header />
      
      <Element name="feautured">
       <Featured />
      </Element>

      <Element name="venue">
        <VenueInfo />
      </Element>

     <Element name="highlight" >
      <Highlights/>       
     </Element>

     <Element name="pricing" >
      <Pricing/>       
     </Element>

     <Element name="location" >
      <Location />       
     </Element>

      <Footer />

    </div>
  );
}

export default App;
