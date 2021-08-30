import { useState } from "react";

import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Dropdown } from "./components/Dropdown";

import GlobalStyle from './styles/global';

import { SliderData } from './data/SliderData';

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
      <GlobalStyle />
    </>
  );
}

export default App;
