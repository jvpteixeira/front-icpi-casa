import {
  Content,
  ProjectAddress,
  ProjectCard,
  ProjectCardDivisor,
  ProjectCardLeftSide,
  ProjectCardRight,
  ProjectContainer,
  ProjectGoal,
  ProjectGoalContainer,
  ProjectGoalLabel,
  ProjectHeader,
  ProjectImage,
  ProjectRepresentativeContainer,
  ProjectRepresentativeDescription,
  ProjectRepresentativeHeaders,
  ProjectRepresentativeImage,
  ProjectRepresentativeImageContainer,
  ProjectRepresentativeTitle,
  ProjectTitle,
} from './styles';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Textbox from '../../components/Textbox';
import dictionary from '../../config/dictionary';
import MenuFlow from '../dashboard';
import HeaderNotification from '../notification';
import SquareImage from '../../assets/images/imagemCultoAjovep.jpg'


export default function ProjectCardsCampign() {
  return (
    <Content>
      <HeaderNotification/>
      <Textbox
            label={dictionary.register.labelOwner}
            name="owner"
            type="text"
            placeholder={dictionary.register.placeholderOwner}
            icon={faMagnifyingGlass} 
          />
      <ProjectCard>
        <ProjectContainer>
          <ProjectCardLeftSide>
            <ProjectHeader>
              <ProjectTitle>Familia Doce amor</ProjectTitle>
              <ProjectAddress>Mogi Guaçu - ype 2</ProjectAddress>
            </ProjectHeader>
            <ProjectGoalContainer>
              <ProjectGoalLabel>Meta Mensal</ProjectGoalLabel>
              <ProjectGoal>5</ProjectGoal>
            </ProjectGoalContainer>
          </ProjectCardLeftSide> 
          <ProjectCardRight>
            <ProjectImage src={SquareImage}/>
          </ProjectCardRight>
        </ProjectContainer>

        <ProjectCardDivisor/>
        
        <ProjectRepresentativeContainer>
          <ProjectRepresentativeImageContainer>
            <ProjectRepresentativeImage src={SquareImage}/>
          </ProjectRepresentativeImageContainer>
          <ProjectRepresentativeHeaders>
            <ProjectRepresentativeTitle>Edivaldo Pereira</ProjectRepresentativeTitle>
            <ProjectRepresentativeDescription>Representante - Voluntário</ProjectRepresentativeDescription>
          </ProjectRepresentativeHeaders>           
        </ProjectRepresentativeContainer>
      </ProjectCard>

      <ProjectCard>
        <ProjectContainer>
          <ProjectCardLeftSide>
            <ProjectHeader>
              <ProjectTitle>Familia Doce amor</ProjectTitle>
              <ProjectAddress>Mogi Guaçu - ype 2</ProjectAddress>
            </ProjectHeader>
            <ProjectGoalContainer>
              <ProjectGoalLabel>Meta Mensal</ProjectGoalLabel>
              <ProjectGoal>5</ProjectGoal>
            </ProjectGoalContainer>
          </ProjectCardLeftSide> 
          <ProjectCardRight>
            <ProjectImage src={SquareImage}/>
          </ProjectCardRight>
        </ProjectContainer>

        <ProjectCardDivisor/>
        
        <ProjectRepresentativeContainer>
          <ProjectRepresentativeImageContainer>
            <ProjectRepresentativeImage src={SquareImage}/>
          </ProjectRepresentativeImageContainer>
          <ProjectRepresentativeHeaders>
            <ProjectRepresentativeTitle>Edivaldo Pereira</ProjectRepresentativeTitle>
            <ProjectRepresentativeDescription>Representante - Voluntário</ProjectRepresentativeDescription>
          </ProjectRepresentativeHeaders>           
        </ProjectRepresentativeContainer>
      </ProjectCard>
      <MenuFlow/>
    </Content>
  );
}