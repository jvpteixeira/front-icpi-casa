import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import Confirmation from './pages/confirmation';
import ConfirmationMessage from './pages/confirmationMessage';
import PainelPage from './pages/painel';
import ClientsPhotosPage from './pages/clientsPhotos';
import Notification from './pages/notification';
import CampaignStatus from './pages/campaignStatus';
import ScreenCampign from './pages/MainScreenCampaign';
import ProjectCardsCampign from './pages/ProjectCards';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registre-se" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/confirm" element={<ConfirmationMessage />} />
        <Route path="/painel" element={<PainelPage />} />
        <Route path="/clients-photos" element={<ClientsPhotosPage />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/status" element={<CampaignStatus />} />
        <Route path="/screencampign" element={<ScreenCampign />} />
        <Route path="/cardscampign" element={<ProjectCardsCampign />} />
      </Switch>
    </BrowserRouter>
  );
}
