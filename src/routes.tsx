import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import CoWorkers from './pages/coworkers';
import PainelPage from './pages/painel';
import ClientsPhotosPage from './pages/clientsPhotos';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<h1>Hello World</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registre-se" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/colaboradores" element={<CoWorkers />} />
        <Route path="/painel" element={<PainelPage />} />
        <Route path="/clients-photos" element={<ClientsPhotosPage />} />
      </Switch>
    </BrowserRouter>
  );
}
