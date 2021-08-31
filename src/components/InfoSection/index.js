import { Section, Container, ColumnLeft, ColumnRight } from './styles';

import { Button } from '../Button';

export function InfoSection({ 
  heading, 
  paragraphOne, 
  paragraphTwo, 
  buttonLabel, 
  buttonLabel2, 
  reverse, 
  image, 
  primary, 
  button, 
  background, 
  padding, 
  align, 
  height, 
}) {
  return (
    <Section background={background}>
      <Container padding={padding} align={align}>
        <ColumnLeft reverse={reverse} height={height}>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button primary={primary} border='true' to='/homes'>{buttonLabel}</Button>
          {button && <button to='/homes'>{buttonLabel2}</button>}
        </ColumnLeft>

        <ColumnRight reverse={reverse} padding={padding} height={height}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
}
