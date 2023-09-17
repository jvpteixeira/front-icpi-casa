import { Justify, Row } from 'react-grid-system';

interface props {
  children: React.ReactNode;
  justify?: Justify;
}
export default function GridRow({ children, justify }: props) {
  return <Row justify={justify}>{children}</Row>;
}
