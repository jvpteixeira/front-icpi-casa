import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faChartLine,
  faCalendar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

interface Menus {
  icon: IconDefinition;
  text: string;
  route: string;
}

const menus: Menus[] = [
  {
    icon: faChartLine,
    text: 'Dashboard',
    route: '/dashboard',
  },
  {
    icon: faUser,
    text: 'Colaboradores',
    route: '/colaboradores',
  },
  {
    icon: faCalendar,
    text: 'Agendamentos',
    route: '/agendamentos',
  },
];
export default menus;
