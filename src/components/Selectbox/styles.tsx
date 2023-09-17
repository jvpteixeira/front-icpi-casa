import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  width: 100%;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 1.2em;
  color: ${(props) => props.theme.color.white};
`;

export const Select = styled.select`
  outline: none;
  font-size: ${(props) => (props.size ? `${props.size}em` : '1em')};
  font-weight: Bold;
  color: ${(props) => props.theme.color.primary};
  width: 100%;
  letter-spacing: 1px;
  font-weight: 300;
  padding: 0.7em 1.5em;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => props.theme.color.selectInput};
  border: 1px solid #808080;
  border-radius: 15px;
  &:focus {
    border-color: ${(props) => props.theme.color.primary};
  }
  &::placeholder {
    color: ${(props) => props.theme.color.light};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ShowPassword = styled.button`
  background-color: ${(props) => props.theme.color.light};
  border: none;
  color: ${(props) => props.theme.color.borderUnfocused};
  font-size: 1.2em;
  align-self: flex-end;
  transform: translate(-16px, -40px);
  padding: 0.2em;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  height: 0px;

  &:hover {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const ErrorMessage = styled.small<{ showPassword?: boolean }>`
  color: ${(props) => props.theme.color.error};
  padding-top: ${(props) => (props.showPassword ? '0' : '6px')};
  letter-spacing: 1px;
`;
