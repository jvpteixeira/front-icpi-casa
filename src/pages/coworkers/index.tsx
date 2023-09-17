import DashboardWrapper from '../../components/DashboardWrapper';
import { ModuleTitle } from '../../components/DashboardWrapper/style';
import Textbox from '../../components/Textbox';

export default function CoWorkers() {
  return (
    <DashboardWrapper>
      <ModuleTitle>COLABORADORES</ModuleTitle>
      <Textbox placeholder="Nome do colaborador" />
      <Textbox placeholder="exemplo@exemplo.com.br" />
      <Textbox placeholder="******" />
      <Textbox placeholder="Descrição do colaborador" />
    </DashboardWrapper>
  );
}
