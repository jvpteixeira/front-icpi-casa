import { Link } from 'react-router-dom';
import {
  Content, Image, ProjectImages, ProjectRodape,
} from './styles';
import Perfil  from '../../assets/images/IconePerfil.svg';
import Pesquisar  from '../../assets/images/Lupa.svg';
import Familia  from '../../assets/images/MaoSegurandoCriança.svg';
import Cesta  from '../../assets/images/hand-holding.svg';

export default function Dashboard() {
  return (
  <Content>
    <ProjectRodape>
      <ProjectImages>
        <Link to="/login">
        <Image src={Perfil} alt="Imagem 1" />
        </Link>
        <Link to="/status">
          <Image src={Pesquisar} alt="Imagem 2" />
        </Link>
        <Link to="/painel">
          <Image src={Familia} alt="Imagem 3" />
        </Link>
        <Link to="/dashboard">
          <Image src={Cesta} alt="Imagem 5" />
        </Link>
      </ProjectImages>
    </ProjectRodape>
  </Content>
  );
}

