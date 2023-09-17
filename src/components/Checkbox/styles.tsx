import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CheckboxProps {
  checked?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.8em;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
`;

export const Text = styled.label`
  font-weight: 300;
  color: ${(props) => props.theme.color.dark};
  letter-spacing: 1px;
`;

export const Custom = styled.label<CheckboxProps>`
  border: 2px solid ${(props) => props.theme.color.primary};
  display: flex;
  width: 1.4em;
  height: 1.4em;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background-color: ${(props) =>
    props.checked ? props.theme.color.primary : props.theme.color.light};
  cursor: pointer;
  color: ${(props) => props.theme.color.light};
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 5px 1px ${(props) => props.theme.color.gray};
  }
`;

export const Input = styled.input.attrs({ type: 'checkbox' })`
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  height: 0;
  padding: 0;
`;

export const Icon = styled(FontAwesomeIcon)<CheckboxProps>`
  font-size: 0.8em;
  color: ${(props) => props.theme.light};
  ${(props) =>
    !props.checked &&
    css`
      visibility: hidden;
    `}
`;
