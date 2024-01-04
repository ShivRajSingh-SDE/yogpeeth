import React, { useState, useEffect } from "react";
import Header from "../header";
import Main from "../main";
import About from "../about";
import Work from "../work";

import Other from "../other";
import Contact from "../contact";

import LoadingScreen from "../LoadingScreen";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Main />
      <About />
      <Other />
      <Work />

      <Contact />
    </div>
  );
};

export default HomePage;
