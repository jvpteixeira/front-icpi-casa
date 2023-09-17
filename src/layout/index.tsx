import { ThemeProvider } from 'styled-components';
import { LayoutStyle } from './styles';
import theme from '../config/theme';
import '../assets/fonts/Sedan SC.ttf';
import '../assets/fonts/Segoe UI.ttf';
import '../assets/index.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <LayoutStyle />
      {children}
    </ThemeProvider>
  );
}
