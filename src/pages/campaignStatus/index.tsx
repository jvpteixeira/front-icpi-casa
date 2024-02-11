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
} from './styles';
import Campaign from '../../@core/domain/model/Campaign';
import { useEffect, useState } from 'react';
import GetDescricaoUseCase from '../../@core/application/campaigns/getDescricaoUseCase';
import MenuFlow from '../dashboard';
import HeaderNotification from '../notification';
import ImageSpark from '../../assets/images/ArreadacaoSpark.jpg'
import IconeLarissa from '../../assets/images/IconeLarissa.jpg'
import IconeLemao from '../../assets/images/IconeLemao.jpg'
import IconeAndreia from '../../assets/images/IconeAndreia.jpg'
import IconeCarol from '../../assets/images/IconeCarol.jpg'
import IconeIsmaela from '../../assets/images/IconeIsmaela.jpg'
import IconeJuan from '../../assets/images/IconeJuan.jpg'
import IconeGeovana from '../../assets/images/IconeGeovana.jpg'
import IconeDanilo from '../../assets/images/IconeDanilo.jpg'
import IconeBruna from '../../assets/images/IconeBruna.jpg'

export default function CampaignStatus() {

const [campaign, setCampaign] = useState<Campaign>()
const [campaignsDescricaoFilter] = useState<string>()





useEffect(() => {
const getDescricaoUseCase = new GetDescricaoUseCase();

getDescricaoUseCase.execute("54a6a3c5-e3e1-46e0-8adc-fbce1b6ece5f").then(res => {
    setCampaign(res.data)
}).catch(err => {
console.log("Erro na requisição para recuperar a descrição da campanha", err)
})

}, [campaignsDescricaoFilter])


  return (
      <Content>
        <HeaderNotification/>
        <CampaignStatusMainDiv>

        <CampaignStatusTitle>
            Projeto ICPI Casa
        </CampaignStatusTitle>

        <CampaignStatusImageDiv>
            <CampaignStatusImage src={ImageSpark}/>
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
                A meta
            </CampaignStatusNumber>
        </CampaignStatusNumberDiv>

        <CampaignStatusGridImage>
            <CampaignStatusMinGrid>
                <CampaignStatusImageMini src={IconeLarissa} alt={"Imagem da Larissa"}/>
                <CampaignStatusVoluntaryName>
                    Larissa
                </CampaignStatusVoluntaryName>
            </CampaignStatusMinGrid>

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
                <i>QUERO SER UM VOLUNTÁRIO</i>
            </CampaignStatusTextButtom>
        </CampaignStatusVoluntaryButtom>
        

        
        </CampaignStatusMainDiv>
        <MenuFlow/>
      </Content>
  );
}
