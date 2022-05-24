import React from "react";

import "./App.css";
import Bookings from "../src/components/Bookings";
import Card from "../src/components/Card";
import Heading from "../src/components/Heading";
import TouristInfoCards from "../src/components/TouristInfoCards";
import Restaurant from "../src/components/Restaurant";
import Footer from "../src/components/Footer";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  );
};

export default App;
