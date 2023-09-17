import styled from 'styled-components';
import GridCol from '../GridCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.color.light};
`;

export const LeftLogoImg = styled.img`
  width: 50px;
`;

export const MiddleLogoImg = styled.img`
  width: 170px;
`;
export const DashboardHeaderWrapper = styled.div`
  padding: 20px;
`;

export const DashboardLeft = styled.div`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const DashboardRight = styled(GridCol)`
  border-left: 1px solid ${(props) => props.theme.color.mainBorder};
`;
export const MenuIcon = styled(FontAwesomeIcon)`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const ModuleTitle = styled.h1`
  color: ${(props) => props.theme.color.dashTitle};
  text-align: center;
  font-family: 'Sedan SC';
`;
