import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../../assets/images/background_register.png';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw; 
  height: 3em; 
  background-color: white;
  border-radius: 1px; 
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.2);
  padding: 1em;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-size: cover; 
    background-image: white;
    background-position: center;
  }
`;

export const ProjectHighCard = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
`;

export const LiftNameProject = styled.span`
  width: 100%;
`;

export const ProjectAlertButton = styled.div`
  display:flex;
  justify-content: right;
  padding: .8%;
`;

export const ImageSine = styled.img`
  width: 11%;
`;