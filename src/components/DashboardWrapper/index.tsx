import { useState } from 'react';
import GridCol from '../GridCol';
import GridRow from '../GridRow';
import AsideMenu from '../Menus/AsideMenu';
import SelectBox from '../Selectbox';
import Textbox from '../Textbox';
import DashboardHeader from './DashboardHeader';
import { DashboardLeft, DashboardRight, Wrapper } from './style';
import Table from '../Table';
import { Container, Hidden, Visible } from 'react-grid-system';
import Modal from '../Modal';
import Button from '../Button';
import ChildrenProps from '../../@core/domain/ui/ChildrenProp';

export default function DashboardWrapper({ children }: ChildrenProps) {
  return (
    <Wrapper>
      <Container fluid>
        <DashboardHeader />
        <GridRow>
          <GridCol lg={3} xl={2}>
            <DashboardLeft>
              <AsideMenu />
            </DashboardLeft>
          </GridCol>
          <DashboardRight lg={9} xl={10}>
            {children}
          </DashboardRight>
        </GridRow>
      </Container>
    </Wrapper>
  );
}
