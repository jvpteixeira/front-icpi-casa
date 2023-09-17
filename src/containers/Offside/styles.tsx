import styled from 'styled-components';
import logoLight from '../../assets/images/umbrella-light.svg';
import logo from '../../assets/images/umbrella.svg';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.theme.color.light};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    overflow-y: auto;
    margin-right: 0.3em;

    &::-webkit-scrollbar {
      width: 0.2em;
    }

    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme.color.light};
      padding-top: 1em;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.color.primary};
      border-radius: 8px;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.theme.color.primary};
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img.attrs({ src: logoLight })`
  width: 60%;
  min-width: 6em;
`;

export const ShowContent = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  flex-direction: column;
  gap: 1em;
`;

export const Subtitle = styled.span`
  color: ${(props) => props.theme.color.light};
  text-align: center;
  font-size: 1.2em;

  b {
    color: ${(props) => props.theme.color.dark};
  }
`;

export const Copyright = styled.span`
  font-size: 0.7em;
  padding-bottom: 0.5em;
  color: ${(props) => props.theme.color.gray};
  padding-top: 5em;
`;

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 3em;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const LogoMobile = styled.img.attrs({ src: logo })`
  width: 15%;
`;
