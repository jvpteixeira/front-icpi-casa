import ChildrenProps from '../../@core/domain/ui/ChildrenProp';
import { TableBodyStyled } from './style';

export default function TableHeader({ children }: ChildrenProps) {
  return <TableBodyStyled>{children}</TableBodyStyled>;
}
