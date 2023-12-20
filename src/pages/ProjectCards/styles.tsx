import styled from 'styled-components';


export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5em;
margin-bottom: 12.5%;
@media only screen and (max-width: 768px) {
  width: 100%;
  height: 100%;
  background-image: white;
}
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 97%; 
  margin-right: 1.5%;
  margin-left: 1.5%;
  background-color: white;
  border-radius: 4px; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProjectTitle = styled.h1`
  font-size: 125%;
`;

export const ProjectAddress = styled.span`
  font-size: 90%;
`;

export const ProjectCardLeftSide = styled.div`
padding-top: .5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4em;
  height: 100%;
`;

export const ProjectCardRight = styled.div`
  padding: .5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ProjectHeader = styled.div`
  
`;

export const ProjectGoalContainer = styled.div`
  
`;


export const ProjectGoalLabel = styled.div`
  font-size: 80%;
`;

export const ProjectGoal = styled.div`
  font-size: 150%;
  color: orange;
  font-weight: bold;
`;

export const ProjectImage = styled.img`
  border-radius: 5px;
  width: 9.5em;
  height: 9.5em;
`;


export const ProjectCardDivisor = styled.div`
  border-bottom: 1px solid #ccc;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const ProjectRepresentativeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: center;
  width: 100%;
`;

export const ProjectRepresentativeImageContainer = styled.div`

`;

export const ProjectRepresentativeImage = styled.img`
  border-radius: 100%;
  height: 3em;
  width: 3em;
  border: 1.5px solid orange;

`;


export const ProjectRepresentativeHeaders = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
`;

export const ProjectRepresentativeTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 300; 
`;

export const ProjectRepresentativeDescription = styled.h3`
  font-size: 0.8em; 
  color: #888; 
  font-weight: 300; 
`;
