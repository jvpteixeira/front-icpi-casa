import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, MenuContainer } from './style';
import {
  faChartLine,
  faCalendar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import MenuItem from './MenuItem';
import menus from './menus';

export default function AsideMenu() {
  return (
    <MenuContainer>
      <Menu>
        {menus.map((menu) => (
          <MenuItem icon={menu.icon} href={menu.route}>
            {menu.text}
          </MenuItem>
        ))}
      </Menu>
    </MenuContainer>
  );
}
