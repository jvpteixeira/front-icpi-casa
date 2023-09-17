import styled from 'styled-components';

interface InputProps {
  size?: number;
  showPassword?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  width: 100%;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 1.2em;
  color: ${(props) => props.theme.color.dark};
`;

export const Input = styled.input<InputProps>`
  border: ${(props) => props.theme.color.borderUnfocused};
  outline: none;
  font-size: ${(props) => (props.size ? `${props.size}em` : '1.2em')};
  color: ${(props) => props.theme.color.dark};
  height: 3em;
  width: 100%;
  letter-spacing: 1px;
  font-weight: 300;
  box-shadow: 0 8px 9px 1px rgba(0, 0, 0, 0.1);
  padding: 0.7em 1em;
  padding-right: ${(props) => (props.showPassword ? `3em` : `1em`)};
  padding-left: 3.3em;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: ${(props) => props.theme.color.primary};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ShowPassword = styled.button`
  background-color: ${(props) => props.theme.color.light};
  border: none;
  color: ${(props) => props.theme.color.borderUnfocused};
  font-size: 1.2em;
  align-self: flex-end;
  transform: translate(-16px, -40px);
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  height: 0px;
`;

export const ShowIcon = styled.button`
  background-color: ${(props) => props.theme.color.light};
  border: none;
  color: ${(props) => props.theme.color.primary};
  font-size: 1.2em;
  align-self: flex-start;
  transform: translate(-16px, -40px);
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  height: 0px;
  margin-left: 1.8em;
`;

export const ErrorMessage = styled.small<{ showPassword?: boolean }>`
  color: ${(props) => props.theme.color.error};
  padding-top: ${(props) => (props.showPassword ? '0' : '6px')};
  letter-spacing: 1px;
  align-self: flex-start;
`;
