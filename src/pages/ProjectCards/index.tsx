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
import { useEffect, useState } from 'react';
import GetAllCampaignsUseCase from '../../@core/application/campaigns/getAllCampaignsUseCase';
import Campaign from '../../@core/domain/model/Campaign';
import { useNavigate } from 'react-router-dom';

export default function ProjectCardsCampign() {

  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [campaignsSearchFilter, setCampaignsSearchFilter] = useState<string>()

  const navigate = useNavigate();



  useEffect(() => {
   const getAllCampaignsUseCase = new GetAllCampaignsUseCase();

   getAllCampaignsUseCase.execute({name: campaignsSearchFilter}).then(res => {
      setCampaigns(res.data)
   }).catch(err => {
    console.log("Erro na requisição para recuperar todas campanhas", err)
   })

  }, [campaignsSearchFilter])

  return (
    <Content>
      <HeaderNotification/>
      <Textbox
        label={dictionary.register.labelOwner}
        name="owner"
        type="text"
        placeholder={dictionary.register.placeholderOwner}
        icon={faMagnifyingGlass}
        value={campaignsSearchFilter}
        setValue={e => setCampaignsSearchFilter(e.target.value)}
      />

      {campaigns.map(campaign => (
        <ProjectCard onClick={() => navigate("/status")} >
          <ProjectContainer>
            <ProjectCardLeftSide>
              <ProjectHeader>
                <ProjectTitle>{campaign.nome}</ProjectTitle>
                <ProjectAddress>Mogi Guaçu - ype 2</ProjectAddress>
              </ProjectHeader>
              <ProjectGoalContainer>
                <ProjectGoalLabel>Meta Mensal</ProjectGoalLabel>
                <ProjectGoal>{campaign.meta}</ProjectGoal>
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
              <ProjectRepresentativeTitle>{campaign.organizador}</ProjectRepresentativeTitle>
              <ProjectRepresentativeDescription>Representante - Voluntário</ProjectRepresentativeDescription>
            </ProjectRepresentativeHeaders>           
          </ProjectRepresentativeContainer>
        </ProjectCard>
      ))}
      <MenuFlow/>
    </Content>
  );
}