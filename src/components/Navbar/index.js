import { menuData } from '../../data/MenuData';

import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks, NavBtn } from './styles';

import { Button } from '../Button';

export function Navbar() {
  return (
    <Nav>
      <Logo to="/">Unic</Logo>
      <MenuBars />
      <NavMenu>
        {menuData.map((item, key) => (
          <NavMenuLinks to={item.link} key={key}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
        <Button to="/contato" primary='true'>Contate-nos</Button>
      </NavBtn>
    </Nav>
  );
}