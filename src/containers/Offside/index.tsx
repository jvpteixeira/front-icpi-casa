import Title from '../../components/Title';
import dictionary from '../../config/dictionary';
import {
  Container,
  Copyright,
  LeftSide,
  Logo,
  LogoMobile,
  MobileContainer,
  RightSide,
  ShowContent,
  Subtitle,
} from './styles';

interface OffsiteParams {
  children: React.ReactNode;
}

export default function Offsite({ children }: OffsiteParams) {
  return (
    <Container>
      <LeftSide>
        {children}
      </LeftSide>
      <RightSide>
        <ShowContent>
          <Logo />
          <Title size={3} darkMode />
          <Subtitle
            dangerouslySetInnerHTML={{ __html: dictionary.login.logoSubtitle }}
          />
        </ShowContent>
      </RightSide>
    </Container>
  );
}
