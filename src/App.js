import { useState } from "react";

import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Dropdown } from "./components/Dropdown";
import { InfoSection } from './components/InfoSection';
import { Footer } from "./components/Footer";

import GlobalStyle from './styles/global';

import { SliderData } from './data/SliderData';
import { InfoData, InfoDataTwo, InfoDataThree } from './data/InfoData';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection primary='true' {...InfoData} />
      <InfoSection button='true' background='true' padding='true' align='true' height='true' {...InfoDataTwo} />
      <InfoSection primary='true' {...InfoDataThree} />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
