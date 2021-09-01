import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0;
  background: ${({ background }) => ( background ? '#000d1a' : '#fff' )};
`;

export const Container = styled.div`
  padding: ${({ padding }) => ( padding ? '0' : '3rem calc((100vw - 1300px) / 2)' )};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50rem; // 800px
  align-items: ${({ align }) => ( align ? 'center' : 'none' )};

  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`;

export const ColumnLeft = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  height: ${({ height }) => ( height ? '30rem' : 'none' )};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => ( reverse ? '2' : '1' )};

  h3{
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
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
  padding: ${({ padding }) => ( padding ? '1rem 0' : '1rem 2rem' )};
  display: flex;
  order: ${({ reverse }) => ( reverse ? '1' : '2' )};
  justify-content: center;
  align-items: center;

  img{
    width: 100%;
    height: ${({ height }) => ( height ? '760px' : 'none' )};
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
