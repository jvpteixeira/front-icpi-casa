import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import ChildrenProps from '../../@core/domain/ui/ChildrenProp';
import { MenuItemStyled } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface props extends ChildrenProps {
  icon: IconDefinition;
  selected?: boolean;
  href: string;
}
export default function MenuItem({ children, icon, selected, href }: props) {
  return (
    <MenuItemStyled selected={selected}>
      <FontAwesomeIcon color="#fff" icon={icon} />
      <a href={href}>{children}</a>
    </MenuItemStyled>
  );
}
