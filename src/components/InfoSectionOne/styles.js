import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
  background-color: #000d1a;
`;

export const Container = styled.div`
  /* padding: 3rem calc((100vw - 1300px) / 2); */
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  align-items: center;

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`;

export const ColumnLeft = styled.div`
  background: #fff;
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 8rem;
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

  button{
    width: 220px;
    border: none;
    font-size: 1rem;
    color: var(--white);
    border: none;
    padding: 1rem;
    background-color: #C87938;
  }
`;

export const ColumnRight = styled.div`
  padding: 1rem 0;
  display: flex;
  order: ${({ reverse }) => ( reverse ? '1' : '2' )};
  justify-content: center;
  align-items: center;

  img{
    width: 100%;
    height: 760px;
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
