import React, { useEffect } from "react";
import Home from "./views/Home";
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <>
      <Home />
    </>
  );
}

export default App;
