import {
    CardText,
  Content, GlobalContent, NumberBall, ProjectCardButtonConfirmation, ProjectCardConfirmation, ProjectCardGroup, ProjectCardMessage, ProjectConfirmation, ProjectSubTitle, ProjectTitleConfirmation,
} from './styles';
import MenuFlow from '../dashboard';
import HeaderNotification from '../notification';


export default function ConfirmationMessage() {
  return (
    <Content>
    <ProjectCardMessage>
        <CardText>
            Uuhuuu! <b>parabéns</b> pela iniciativa
        </CardText>
        <CardText>
            O REPRESENTANTE entrará em contato em breve
        </CardText>
    </ProjectCardMessage>
    <GlobalContent>
        <HeaderNotification/>
        <ProjectConfirmation>

            <ProjectTitleConfirmation>Projeto Casa Social</ProjectTitleConfirmation>


            <ProjectSubTitle>
            <p>Que maravilha! Ficamos felizes em saber que deseja se juntar a nós para ajudar o Projeto.</p>
            <br></br>
            <p>Caso não saiba como funciona segue abaixo os detalhes.</p>
            </ProjectSubTitle>

            <ProjectCardGroup>

            <ProjectCardConfirmation>
                <NumberBall>1</NumberBall>
                <CardText>
                O representante da família entrará em contato com você via whatsapp!
                </CardText>
            </ProjectCardConfirmation>

            <ProjectCardConfirmation>
            <NumberBall>2</NumberBall>
                <CardText>
                Você fará parte de um grupo no whatsapp com as demais pessoas que auxiliam a família nesse
                momento tão dificil.
                </CardText>
            </ProjectCardConfirmation>

            <ProjectCardConfirmation>
            <NumberBall>3</NumberBall>
                <CardText>
                O representante enviará no grupo vídeos e imagens mostrando o que foi arrecadado e o que foi
                comprado para a família!
                </CardText>
            </ProjectCardConfirmation>

            <ProjectCardConfirmation>
            <NumberBall>4</NumberBall>
                <CardText>
                Existirão reuniões via vídeo chamadas caso queira participar (é opicional).
                </CardText>
            </ProjectCardConfirmation>

            <ProjectCardConfirmation>
            <NumberBall>5</NumberBall>
                <CardText>
                O valor da sua doação não será divulgado.
                </CardText>
            </ProjectCardConfirmation>

            <ProjectCardConfirmation>
                <CardText>
                O valor mínimo para doação: R$10,00.
                </CardText>
            </ProjectCardConfirmation>

            <ProjectCardButtonConfirmation>
                <CardText>
                Pedido em análise - representante entrará em contato em breve.
                </CardText>
            </ProjectCardButtonConfirmation>

            </ProjectCardGroup>
            </ProjectConfirmation>
        </GlobalContent>
        <MenuFlow/>
      </Content>
  );
}
