import { Container } from 'react-grid-system';
import ChildrenProp from '../../@core/domain/ui/ChildrenProp';
import GridCol from '../GridCol';
import GridRow from '../GridRow';
import { AuthWrapperStyle, LeftContent, RightContent } from './style';

interface props {
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}
export default function AuthWrapper({ leftComponent, rightComponent }: props) {
  return (
    <AuthWrapperStyle>
      <Container fluid>
        <GridRow>
          <LeftContent lg={6}>{leftComponent}</LeftContent>

          <RightContent lg={6}>{rightComponent}</RightContent>
        </GridRow>
      </Container>
    </AuthWrapperStyle>
  );
}
