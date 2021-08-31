import { DropdownContainer, 
  Icon, 
  CloseIcon, 
  DropdownWrapper, 
  DropdownMenu, 
  DropdownLink, 
  BtnWrap 
} from './styles';

import { Button } from '../Button';

import { menuData } from '../../data/MenuData';

export function Dropdown({ isOpen, toggle }) {
  return (
    <>
      {isOpen && (
        <DropdownContainer isOpen={isOpen}>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
          <DropdownWrapper>
            <DropdownMenu>
              {menuData.map((item, key) => (
                <DropdownLink to={item.link} key={key}>
                  {item.title}
                </DropdownLink>
              ))}
            </DropdownMenu>
            <BtnWrap>
              <Button primary='true' big='true' to="/contato">Contate-nos</Button>
            </BtnWrap>
          </DropdownWrapper>
        </DropdownContainer>
      )}
    </>
  );
}