import { ComponentProps } from 'react';
import styled from 'styled-components';

export const MenuContainer = styled.div`
  padding: 10px;
  margin-left: 10px;
  width: 90%;
`;

export const Menu = styled.div`
  background-color: ${(props) => props.theme.color.darkGray};
  border-radius: 15px;
  padding: 15px;
`;
interface MenuItemProps {
  selected?: boolean;
}
export const MenuItemStyled = styled.div<MenuItemProps>`
  font-size: 18px;
  background-color: ${(props) =>
    props.selected === true
      ? props.theme.color.menuItemBackground
      : props.theme.color.darkGray};
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  :hover {
    cursor: pointer;
  }

  a {
    margin-left: 15px;
    text-decoration: none;
  }
`;
