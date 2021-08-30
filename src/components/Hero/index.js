import { useState, useRef, useEffect } from 'react';

import {
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  Arrow,
  SliderButtons,
  PrevArrow,
  NextArrow
} from './styles';

import { Button } from '../Button';

export function Hero({ slides }) {
  const [current, setCurrent] = useState(0);
  const timeout = useRef(null);

  const length = slides.length;

  useEffect(() => {
    function nextSlide() {
      setCurrent(current => (current === length - 1 ? 0 : current + 1))
    }

    timeout.current = setTimeout(nextSlide, 10000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    }
  }, [current, length])

  function nextSlide() {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, key) => (
          <HeroSlide key={key}>
            {key === current && (
              <HeroSlider>
                <HeroImage src={slide.image} alt={slide.alt} />
                <HeroContent>
                  <h1>{slide.title}</h1>
                  <p>{slide.price}</p>
                  <Button to={slide.path} primary='true'>
                    {slide.label}
                    <Arrow />
                  </Button>
                </HeroContent>
              </HeroSlider>
            )}
          </HeroSlide>
        ))}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
}