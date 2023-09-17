import ChildrenProps from '../../@core/domain/ui/ChildrenProp';
import { TableHeaderStyled } from './style';

export default function TableHeader({ children }: ChildrenProps) {
  return <TableHeaderStyled>{children}</TableHeaderStyled>;
}
