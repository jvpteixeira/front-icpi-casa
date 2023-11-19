import styled from 'styled-components';


export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2em;
@media only screen and (max-width: 768px) {
  width: 100%;
  height: 100%;
  background-image: white;
}
`;

export const ProjectTitleCampign = styled.h1`
font-size: 1.5em;
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 97%; 
  height: 15em;
  margin-right: 1.5%;
  margin-left: 1.5%;
  background-color: white;
  border-radius: 4px; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
`;
