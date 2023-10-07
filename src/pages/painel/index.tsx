import { useCallback, useContext } from 'react';
import dictionary from '../../config/dictionary';
import {
  Bee8bBaseboardContainer,
  Bee8bBaseboardSubtitle,
  Bee8bBaseboardTitle,
  Content,
  Form,
  Header,
  HeaderContainer,
  MetricsComponent,
  MetricsContainer,
  MetricsLabel,
  MetricsSection,
  NextButton,
  PieComponent,
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
import Offsite from '../../containers/Offside';
import Brunatop  from '../../assets/images/brunatop.jpeg';

export default function PainelPage() {
  return (
    <Offsite>
      <Content>
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
            <ProjectImage src={Brunatop}/>
          </ProjectCardRight>
        </ProjectContainer>

        <ProjectCardDivisor/>
        
        <ProjectRepresentativeContainer>
          <ProjectRepresentativeImageContainer>
            <ProjectRepresentativeImage src={Brunatop}/>
          </ProjectRepresentativeImageContainer>
          <ProjectRepresentativeHeaders>
            <ProjectRepresentativeTitle>Edivaldo Pereira</ProjectRepresentativeTitle>
            <ProjectRepresentativeDescription>Representante - Voluntário</ProjectRepresentativeDescription>
          </ProjectRepresentativeHeaders>           
        </ProjectRepresentativeContainer>
      </ProjectCard>
      </Content>
    </Offsite>
  );
}
