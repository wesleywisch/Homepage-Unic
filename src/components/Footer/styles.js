import styled, { css } from "styled-components";
import { FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';

export const Container = styled.footer`
  border-radius: 100px 100px 0 0;
  background-color: var(--cinza800);
  width: 100%;
  height: 33.75rem; // 540px

  display: grid;
  grid-template-columns: 1fr 1fr;

  .ContainerRight{
    color: var(--white);

    ul li{
      list-style: none;
    }
  }

  @media screen and (max-width: 1000px) {
    height: 50rem; // 800px
    grid-template-columns: 1fr;
    grid-template-rows: 26.25rem; // 420px
  }

  @media screen and (max-width: 600px){
    height: 37.5rem; // 600px
    grid-template-rows: 12.5rem; // 200px
  }
`;

export const Logo = styled.footer`
  color: var(--white);
  font-size: 8rem;
  padding: 2rem 3rem;

  @media screen and (max-width: 1000px) {
    h1{
      text-align: center;
    }
  }

  @media screen and (max-width: 600px) {
    h1{
      font-size: 4rem;
    }
  }
`;

export const Icons = styled.div`
  margin-left: 10%;

  @media screen and (max-width: 1000px) {
    text-align: center;
    margin-left: 0;
  }
`;

export const iconsButton = css`
  width: 50px;
  height: 50px;
  color: #C87938;
  cursor: pointer;
  background: var(--cinza800);
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transform: 0.3s;

  &:hover{
    background: var(--white);
    transform: scale(1.05);
  }
`;

export const Youtube = styled(FaYoutube)`
  ${iconsButton}
`;

export const Instagram = styled(AiOutlineInstagram)`
  ${iconsButton}
`;

export const Facebook = styled(FaFacebook)`
  ${iconsButton}
`;

export const Linkedin = styled(FaLinkedin)`
  ${iconsButton}
`;

export const Contacts = styled.div`
  margin-top: 12%;
  margin-left: 40%;

  ul li {
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1000px) {
    margin-top: 0;
    margin-left: 0;
    text-align: center;
  }
`;

export const Offices = styled.div`
  margin-top: 6%;
  margin-left: 40%;

  ul li {
    margin-top: 1rem;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 1000px) {
    margin-left: 0;
    text-align: center;
  }
`;
