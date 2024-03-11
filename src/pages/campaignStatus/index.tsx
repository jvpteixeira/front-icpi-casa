import {
    CampaignStatusBoxStatus,
    CampaignStatusBoxText,
    CampaignStatusCardTextDescription,
    CampaignStatusCardTitle,
    CampaignStatusCardVoluntaryStatus,
    CampaignStatusDivCard,
    CampaignStatusDivCardMain,
    CampaignStatusDivIconeCard,
    CampaignStatusGridImage,
    CampaignStatusIconeCard,
    CampaignStatusImage,
    CampaignStatusImageDiv,
    CampaignStatusImageMini,
    CampaignStatusMainDiv,
    CampaignStatusMinGrid,
    CampaignStatusNumber,
    CampaignStatusNumberDiv,
    CampaignStatusSubtitle,
    CampaignStatusSubtitleDiv,
    CampaignStatusTextButtom,
    CampaignStatusTitle,
  CampaignStatusVoluntaryButtom,
  CampaignStatusVoluntaryName,
  Content,
  StyledLink,
} from './styles';
import Campaign from '../../@core/domain/model/Campaign';
import Colaborator from '../../@core/domain/model/Colaborator';
import { useEffect, useState } from 'react';
import GetNameColaboratorUseCase from '../../@core/application/colaborator/getNameUseCase';
import GetDescricaoUseCase from '../../@core/application/campaigns/getDescricaoUseCase';
import MenuFlow from '../dashboard';
import HeaderNotification from '../notification';
import ImageSpark from '../../assets/images/ArreadacaoSpark.jpg'
import IconePerfil from '../../assets/images/IconePerfil.svg'
import IconeBruna from '../../assets/images/IconeBruna.jpg'

export default function CampaignStatus() {

    const [campaign, setCampaign] = useState<Campaign>()

    const [colaborators, setColaborators] = useState<Colaborator[]>()


    useEffect(() => {
        const getDescricaoUseCase = new GetDescricaoUseCase();

        getDescricaoUseCase.execute("3950c980-bf61-4a40-badf-f5425ac42db0").then(res => {
            setCampaign(res.data)
        }).catch(err => {
        console.log("Erro na requisição para recuperar a descrição da campanha", err)
        })
    })

    useEffect(() => {
        const getNameColaboratorUseCase = new GetNameColaboratorUseCase();
        
        getNameColaboratorUseCase.execute('3950c980-bf61-4a40-badf-f5425ac42db0').then(res =>{
            setColaborators(res.data) 
        }).catch(error => {
            console.log("Erro na requisição do nome do colaborador", error)
        })
    })



    return (
      <Content>
        <HeaderNotification/>
        <CampaignStatusMainDiv>

        <CampaignStatusTitle>
            Projeto ICPI Casa
        </CampaignStatusTitle>

        <CampaignStatusImageDiv>
            <CampaignStatusImage src={ImageSpark} alt="imagem generica de campanha"/>
        </CampaignStatusImageDiv>

        <CampaignStatusSubtitleDiv>
        <CampaignStatusSubtitle>{campaign?.descricao}</CampaignStatusSubtitle>
        </CampaignStatusSubtitleDiv>
        
        
        <CampaignStatusBoxStatus>
            <CampaignStatusBoxText>
                Situação: Número de voluntários não atingido
            </CampaignStatusBoxText>
        </CampaignStatusBoxStatus>

        <CampaignStatusNumberDiv>
            <CampaignStatusNumber>
                {campaign?.meta}
            </CampaignStatusNumber>
        </CampaignStatusNumberDiv>

        <CampaignStatusGridImage>
            {colaborators?.map(colaborator => {
            console.log(colaborator)
            return (
                <CampaignStatusMinGrid>
                    <CampaignStatusImageMini src={IconePerfil} alt={"Colaborador"}/>
                    <CampaignStatusVoluntaryName>
                        {colaborator?.name}
                    </CampaignStatusVoluntaryName>
                </CampaignStatusMinGrid>
            )})}
        </CampaignStatusGridImage>

        <CampaignStatusDivCardMain>
            <CampaignStatusDivIconeCard>
                <CampaignStatusIconeCard src={IconeBruna} alt={"Icone da Bruna"}/>
            </CampaignStatusDivIconeCard>
            
            <CampaignStatusDivCard>
                <CampaignStatusCardTitle>
                    Bruna Souza
                </CampaignStatusCardTitle>
                <CampaignStatusCardVoluntaryStatus>
                    Voluntário representativo
                </CampaignStatusCardVoluntaryStatus>
                <CampaignStatusCardTextDescription>
                    Sou representante do projeto da Bruna! Lorem ipsum dolor, sit amet consectetur adipisicing 
                    elit. Eos dolore, doloribus, officia perferendis odit vero facilis assumenda voluptatum 
                    quia libero nulla sit aliquam magni. Architecto et aliquid in qui ea?
                </CampaignStatusCardTextDescription>
            </CampaignStatusDivCard>
        </CampaignStatusDivCardMain>

        <CampaignStatusVoluntaryButtom>
            <CampaignStatusTextButtom>
            <StyledLink to="/confirmation">
                Quero Ser Voluntario
            </StyledLink>
            </CampaignStatusTextButtom>
        </CampaignStatusVoluntaryButtom>
        

        
        </CampaignStatusMainDiv>
        <MenuFlow/>
      </Content>
  );
}
