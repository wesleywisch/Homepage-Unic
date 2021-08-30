import { useEffect, useState } from 'react';
import { menuData } from '../../data/MenuData';

import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks, NavBtn } from './styles';

import { Button } from '../Button';

export function Navbar({ toggle }) {
  const [scroolY, setScrollY] = useState(false);

  useEffect(() => {
    function onScroll(e){
      setScrollY(e.target.documentElement.scrollTop);
      setScrollY(e.target.documentElement.scrollTop > scroolY + 800);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scroolY]);

  return (
    <Nav background={scroolY}>
      <Logo to="/">Unic</Logo>
      <MenuBars onClick={toggle} />
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