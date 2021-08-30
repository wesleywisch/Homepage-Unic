

import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

import GlobalStyle from './styles/global';

import { SliderData } from './data/SliderData';

function App() {
  return (
    <>
      <Navbar />
      <Hero slides={SliderData} />
      <GlobalStyle />
    </>
  );
}

export default App;
