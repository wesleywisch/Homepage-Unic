import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
`;

export const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`;

export const ColumnLeft = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => ( reverse ? '2' : '1' )};

  h1{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  h2{
    margin-bottom: 100px;
    font-size: 50px;
  }

  p{
    margin-bottom: 2rem;
  }
`;

export const ColumnRight = styled.div`
  padding: 1rem 2rem;
  display: flex;
  order: ${({ reverse }) => ( reverse ? '1' : '2' )};
  justify-content: center;
  align-items: center;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px){
      width: 90%;
      height: 90%;
    }
  }

  @media screen and (max-width: 768px){
    order: ${({ reverse }) => ( reverse ? '2' : '1' )};
  }
`;
