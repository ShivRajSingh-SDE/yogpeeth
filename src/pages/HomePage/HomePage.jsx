import React, { useState, useEffect } from "react";
import Header from "../header";
import Main from "../main";
import About from "../about";
import Work from "../work";

import Other from "../other";
import Contact from "../contact";

import LoadingScreen from "../LoadingScreen";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const trackMouse = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", trackMouse);

    setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      document.removeEventListener("mousemove", trackMouse);
    };
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

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
