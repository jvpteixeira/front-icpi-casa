import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../../assets/images/background_register.png';

export const Content = styled.div`
  display: flex;
  width: vw;
  height: vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  
  @media only screen and (max-width: 768px) {
    width: 100%;   
    background-image: white;
    background-position: center;
  }
`;

export const ProjectPatrocinadores = styled.div`
  width: 100%; 
  height: 100%; 
  background-color: white;
`;

export const ProjectPatrocinadoresTitle = styled.h2`
  margin-left: 2%;
  padding: 1.5%;
  font-size: 150%;
`;

export const ProjectImagesPatrocinadores = styled.div`
`;

export const PatrocinadorICPI = styled.img`
  margin-left: 5%;
  margin-right: 2%;
  padding: 1%;
  width: 20%;
  height: 20%; 
`;


export const PatrocinadorAssemb = styled.img`
  padding: 1%;  
  width:  20%;
  height: 20%;
`;
