import { Bre, Container, Lla, Um } from './styles';

interface TitleParams {
  darkMode?: boolean;
  size?: number;
}

export default function Title({ darkMode, size }: TitleParams) {
  return (
    <Container size={size}>
      <Um>Um</Um>
      <Bre darkMode={darkMode}>bre</Bre>
      <Lla darkMode={darkMode}>lla</Lla>
    </Container>
  );
}
