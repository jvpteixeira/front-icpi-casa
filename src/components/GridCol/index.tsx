import { Col, ColProps } from 'react-grid-system';
import ChildrenProps from '../../@core/domain/ui/ChildrenProp';

interface props extends ChildrenProps {
  sm?: number;
  md?: number;
  lg?: number;
  xs?: number;
  xxl?: number;
  xl?: number;
}
export default function GridCol({ children, sm, md, lg, xs, xl, xxl }: props) {
  return (
    <Col sm={sm} md={md} lg={lg} xs={xs} xl={xl} xxl={xxl}>
      {children}
    </Col>
  );
}
