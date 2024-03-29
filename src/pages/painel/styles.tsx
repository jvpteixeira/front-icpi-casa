import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../../assets/images/background_register.png';


export const Content = styled.div`
  display: flex;
  padding-top: 6em;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding-top: 3em;
    background-size: cover; 
    background-image: url(${background});
    background-position: center;
  }
`;

export const Bee8bBaseboardContainer = styled.div`
  display: flex;
  padding-top: 3em;
  padding-bottom: 3em;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;


export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7em;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Header = styled.h1`
  color: ${(props) => props.theme.color.dark};
  font-size: 2.2em;
  @media only screen and (max-width: 768px) {
    font-size: 2.2em;
    font-family: 'Sedan SC';
    font-weight: lighter;
  }
`;

export const Bee8bBaseboardTitle = styled.h1`
  color: ${(props) => props.theme.color.primary};
  font-size: 2.2em;

  @media only screen and (max-width: 768px) {
    font-size: 1.8em;
  }
`;

export const Bee8bBaseboardSubtitle = styled.h1`
  color: ${(props) => props.theme.color.gray};
  opacity: 0.8;
  @media only screen and (max-width: 768px) {
    font-size: 1.2em;
    opacity: 0.5;
  }
`;


export const Subheader = styled.span`
  color: ${(props) => props.theme.color.gray};
  font-size: 1em;
  letter-spacing: 1px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
  align-items: center;
  gap: 1em;
`;

export const MetricsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  align-items: center;
  gap: 2em;
`;

export const MetricsSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 2em;
`;

export const MetricsComponent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(245, 245, 245, 1);
  align-items: center;
  justify-content: center;
  outline: none;
  font-size: 1.5em;
  height: 7em;
  width: 100%;
  letter-spacing: 1px;
  font-weight: 300;
  box-shadow: 0 8px 9px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px; 
`;

export const MetricsLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.8em;
  font-size: 0.6em;
  color: gray;
  width: 50%;
  font-weight: 15;
`;

export const PieComponent = styled.div`
  display: flex;
  background-color: rgba(200, 200, 200, 1);
  align-items: center;
  justify-content: center;
  outline: none;
  font-size: 1.5em;
  height: 7em;
  width: 100%;
  letter-spacing: 1px;
  font-weight: 300;
  box-shadow: 0 8px 9px 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px; 
`;

export const Partition = styled.div`
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const NextButton = styled.button`
  color: ${(props) => props.theme.color.light};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70px;
  background-color: ${(props) => props.theme.color.primary};
  outline: none;
  border: 2px solid ${(props) => props.theme.color.primary};
  padding: 0.8em;
  font-weight: bold;
  font-size: 2em;
  gap: 0.5em;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  box-shadow: 0 4px 8px 0 rgba(93, 23, 235, 1);
  margin-top: 30px;

  @media only screen and (max-width: 768px) {
    font-size: 1.6em;
    width: 80%;
  }
`;

export const ForgetPassword = styled(Link)`
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.color.primary};
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    font-weight: 500;
  }
`;

export const DoNotHaveAccount = styled.span`
  width: 100%;
  text-align: center;
  padding-top: 10m;
  color: ${(props) => props.theme.color.dark};
  letter-spacing: 1px;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.2em;
  }
`;

export const DoNotHaveAccountLink = styled(Link)`
  color: ${(props) => props.theme.color.primary};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 768px) {
    font-weight: 500;
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; 
  height: 18em; 
  background-color: white;
  border-radius: 8px; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  padding: 1em;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProjectTitle = styled.h1`
  font-size: 1.5em;
`;

export const ProjectAddress = styled.h3`
  font-size: 1em;
`;

export const ProjectCardLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ProjectCardRight = styled.div`
  padding: 1em;
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
  font-size: 0.7em;
`;

export const ProjectGoal = styled.div`
  font-size: 1.5em;
  color: orange;
  font-weight: bold;
`;

export const ProjectImage = styled.img`
  border-radius: 5px;
  width: 7em;
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





