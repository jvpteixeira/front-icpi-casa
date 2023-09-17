import styled, { keyframes } from 'styled-components';

const Rotate = keyframes`
  100% { transform: rotate(360deg)}
`;

export const Loader = styled.span`
  width: 64px;
  height: 64px;
  position: fixed;
  top: 50%;
  margin-top: -32px;
  margin-left: -32px;
  left: 50%;
  animation: ${Rotate} 1.5s ease-in infinite alternate;
  z-index: 4;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    color: ${(props) => props.theme.color.primary};
    background: currentColor;
    width: 64px;
    height: 32px;
    border-radius: 0 0 50px 50px;
    z-index: 4;
  }

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 10%;
    background: ${(props) => props.theme.color.dark};
    width: 8px;
    height: 64px;
    animation: ${Rotate} 1.2s linear infinite alternate-reverse;
    z-index: 4;
  }
`;

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.backLoading};
  z-index: 1;
  opacity: 0.5;
`;
