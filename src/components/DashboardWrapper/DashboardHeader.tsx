import { Container } from 'react-grid-system';
import GridCol from '../GridCol';
import GridRow from '../GridRow';
import {
  DashboardHeaderWrapper,
  LeftLogoImg,
  MenuIcon,
  MiddleLogoImg,
} from './style';
import LeftLogo from '../../assets/images/left-logo.png';
import MiddleLogo from '../../assets/images/middle-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AsideMenu from '../Menus/AsideMenu';
import { useState } from 'react';
export default function DashboardHeader() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  return (
    <DashboardHeaderWrapper>
      <Container fluid>
        <GridRow justify="between">
          <GridCol>
            <MiddleLogoImg src={MiddleLogo} />
          </GridCol>

          <GridCol>
            <GridRow justify="end">
              <MenuIcon
                icon={faBars}
                size="lg"
                onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
              />
            </GridRow>
          </GridCol>
        </GridRow>
      </Container>

      {mobileMenuVisible && <AsideMenu />}
    </DashboardHeaderWrapper>
  );
}
