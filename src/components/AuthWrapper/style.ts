import styled from 'styled-components';
import GridCol from '../GridCol';
import background from '../../assets/images/barbearia.jpg';
import { Col } from 'react-grid-system';

export const AuthWrapperStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.color.dark};
`;

export const RightContent = styled(GridCol)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LeftContent = styled(Col)`
  background-image: url(${background});
`;
