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
            <CampaignStatusSubtitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita fugiat molestiae optio 
                consequatur ducimus cupiditate autem, eaque asperiores dolores eos nulla et labore debitis! Sunt molestiae 
                neque quibusdam deleniti?
            </CampaignStatusSubtitle>
        </CampaignStatusSubtitleDiv>
        
        <CampaignStatusBoxStatus>
            <CampaignStatusBoxText>
                Situação: Número de voluntários não atingido
            </CampaignStatusBoxText>
        </CampaignStatusBoxStatus>

        <CampaignStatusNumberDiv>
            <CampaignStatusNumber>
                05 de 15
            </CampaignStatusNumber>
        </CampaignStatusNumberDiv>

        <CampaignStatusGridImage>
            <CampaignStatusMinGrid>
                <CampaignStatusImageMini src={IconeLarissa} alt={"Imagem da Larissa"}/>
                <CampaignStatusVoluntaryName>
                    Larissa
                </CampaignStatusVoluntaryName>
            </CampaignStatusMinGrid>
            
            <CampaignStatusMinGrid>
                <CampaignStatusImageMini src={IconeDanilo} alt={"Imagem do Danilo"}/>
                <CampaignStatusVoluntaryName>
                    Danilo
                </CampaignStatusVoluntaryName>
            </CampaignStatusMinGrid>

            <CampaignStatusMinGrid>
                <CampaignStatusImageMini src={IconeBruna} alt={"Imagem da Bruna"}/>
                <CampaignStatusVoluntaryName>
                    Bruna
                </CampaignStatusVoluntaryName>
            </CampaignStatusMinGrid>

            <CampaignStatusMinGrid>
                <CampaignStatusImageMini src={IconeJuan} alt={"Imagem do Juan"}/>
                <CampaignStatusVoluntaryName>
                    Juan
                </CampaignStatusVoluntaryName>
            </CampaignStatusMinGrid>
            
            <CampaignStatusMinGrid>
                <CampaignStatusImageMini src={IconeIsmaela} alt={"Imagem da Ismaela"}/>
                <CampaignStatusVoluntaryName>
                    Ismaela
                </CampaignStatusVoluntaryName>
            </CampaignStatusMinGrid>

            <CampaignStatusMinGrid>
                <CampaignStatusImageMini src={IconeCarol} alt={"Imagem da Carol"}/>
                <CampaignStatusVoluntaryName>
                    Carol
                </CampaignStatusVoluntaryName>
            </CampaignStatusMinGrid>

            <CampaignStatusMinGrid>
                <CampaignStatusImageMini src={IconeLemao} alt={"Imagem do Lemao"}/>
                <CampaignStatusVoluntaryName>
                    Lemao
                </CampaignStatusVoluntaryName>
            </CampaignStatusMinGrid>
            
            <CampaignStatusMinGrid>
                <CampaignStatusImageMini src={IconeAndreia} alt={"Imagem da Andreia"}/>
                <CampaignStatusVoluntaryName>
                    Andreia
                </CampaignStatusVoluntaryName>
            </CampaignStatusMinGrid>

            <CampaignStatusMinGrid>
                <CampaignStatusImageMini src={IconeGeovana} alt={"Imagem de Geovana"}/>
                <CampaignStatusVoluntaryName>
                    Geovana
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
