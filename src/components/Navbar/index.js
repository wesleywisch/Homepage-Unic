import { menuData } from '../../data/MenuData';

import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks, NavBtn, Button } from './styles';

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
        <Button to="/contato" primary>Contate-nos</Button>
      </NavBtn>
    </Nav>
  );
}