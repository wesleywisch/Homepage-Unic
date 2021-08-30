import { Section, Container, ColumnLeft, ColumnRight } from './styles';

import { Button } from '../Button';

export function InfoSection({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image, primary }) {
  return (
    <Section>
      <Container>
        <ColumnLeft reverse={reverse}>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button primary={primary} border='true' to='/homes'>{buttonLabel}</Button>
        </ColumnLeft>

        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
}
