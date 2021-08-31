import {
  Container,
  Logo,
  Icons,
  Youtube,
  Instagram,
  Facebook,
  Linkedin,
  Contacts,
  Offices,
} from './styles';

import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <Container>
      <div>
        <Logo>
          <h1>Unic</h1>
        </Logo>

        <Icons>
          <Youtube />
          <Instagram />
          <Facebook />
          <Linkedin />
        </Icons>
      </div>

      <div className="ContainerRight">
        <Contacts>
          <ul>
            <li><h3>Contate-nos</h3></li>
            <li><Link to='/faq'>FAQ</Link></li>
            <li><Link to='/suporte'>Suporte</Link></li>
            <li><Link to='/questoes'>Questões</Link></li>
          </ul>
        </Contacts>

        <Offices>
          <ul>
            <li><h3>Escritórios</h3></li>
            <li><Link to='/homes'>California, Estados Unidos</Link></li>
            <li><Link to='/homes'>Santa Catarina, Brasil</Link></li>
            <li><Link to='/homes'>São Paulo, Brasil</Link></li>
          </ul>
        </Offices>
      </div>
    </Container>
  );
}