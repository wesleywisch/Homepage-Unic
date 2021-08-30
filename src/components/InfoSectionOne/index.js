import { Section, Container, ColumnLeft, ColumnRight } from './styles';

export function InfoSectionOne({ heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image, primary }) {
  return (
    <Section>
      <Container>
        <div>
          <ColumnLeft reverse={reverse}>
            <h1>{heading}</h1>
            <p>{paragraphOne}</p>
            <p>{paragraphTwo}</p>
            <button primary={primary} border='true' to='/homes'>{buttonLabel}</button>
          </ColumnLeft>
        </div>

        <ColumnRight reverse={reverse}>
          <img src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
}
