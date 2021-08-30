import { useState } from "react";

import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Dropdown } from "./components/Dropdown";
import { InfoSection } from './components/InfoSection';

import GlobalStyle from './styles/global';

import { SliderData } from './data/SliderData';
import { InfoData, InfoDataFour, InfoDataFive } from './data/InfoData';
import { InfoSectionOne } from "./components/InfoSectionOne";

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

      <InfoSectionOne primary='true' {...InfoDataFour} />
      <InfoSection primary='true' {...InfoDataFive} />
      <GlobalStyle />
    </>
  );
}

export default App;
