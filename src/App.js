import React, { useEffect } from "react";
import Home from "./views/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <>
      <Home />
    </>
  );
}

export default App;
