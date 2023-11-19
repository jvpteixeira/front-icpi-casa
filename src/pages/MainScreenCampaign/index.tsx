import {
  Content,
  ProjectCard,
  ProjectTitleCampign,
} from './styles';

import MenuFlow from '../dashboard';
import HeaderNotification from '../notification';


export default function MainScreenCampign() {
  return (
    <Content>
      <HeaderNotification/>
      <ProjectTitleCampign>
        Campanhas
      </ProjectTitleCampign>
      <ProjectCard>
      </ProjectCard>
      <MenuFlow/>
    </Content>
  );
}