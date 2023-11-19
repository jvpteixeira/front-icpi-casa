import {
   Content, 
  ProjectHighCard,
  LiftNameProject,
  ProjectAlertButton,
  ImageSine,
  } from './styles';
import Sine from "../../assets/images/sininho.svg"
  

  export default function Notifications() {
  return(
   
   <Content>
      <ProjectHighCard>
         <LiftNameProject> 
          CASA SOCIAL
         </LiftNameProject>

         <ProjectAlertButton>
            <ImageSine src={Sine} alt="Sininho notificação"/>
         </ProjectAlertButton>
      </ProjectHighCard>
   </Content>
);
}