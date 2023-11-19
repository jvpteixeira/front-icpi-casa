import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  width: vw;
  heigth: vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-size: cover; 
    background-image: white;
    background-position: center;
  }
`;

export const ProjectRodape = styled.div`
  width: 100%;
  heigth: 15%;
  display: flex;
  position: fixed;
  bottom: 0;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5)
`;

export const ProjectImages = styled.div`
display: flex;
flex-direction: row;
align-items: center;
widht: 100%;
gap: 1em;
padding: 2%;
`;

export const Image = styled.img`
margin-left: 32.5%;
width: 35%;
`;
