import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  justify-content: center;
  padding-bottom: 3em;


  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-size: cover; 
    background-image: white;
    background-position: center;
  }
`;

export const GlobalContent = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(196, 196, 196, 1);
`;

export const ProjectConfirmation = styled.div`
width: 100%;
height: 100%;
background-color: white;
`;

export const ProjectTitleConfirmation = styled.h1`
padding: 5%;
font-size: 150%;
`;

export const ProjectSubTitle = styled.p`
padding: 5%;
font-size: 80%;
`;


export const ProjectCardGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1%;
  margin-top: 5%;
  height: auto;
  width: auto;
`;

export const ProjectCardMessage = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  width: 90%; 
  height: 35%;
  gap: 1.3em;
  padding-top: 1em;
  font-size: 1.25em;
  border-radius: 4px; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  background-color: white;
`;

export const ProjectCardConfirmation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%; 
  padding: 0 1em 0;
  margin-bottom: 5%;
  border-radius: 4px; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
  `;
  
export const NumberBall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 1em;
  max-width: 2em;
  max-height: 2em;
  background-color: white;
  font-size: .8em;
`;

export const CardText = styled.span`
  text-align: center;
  padding: 5%;
  font-size: 80%;
`;


export const ProjectCardButtonConfirmation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%; 
  height: auto;
  margin-top: 1em;
  margin-bottom: 10%;
  background-color: rgba(242, 242, 242, 0.7);
  border-radius: 4px; 
`;