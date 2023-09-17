import styled from 'styled-components';

interface ButtonProps {
  colorType: 'primary' | 'secondary';
}
export const ButtonStyle = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.colorType === 'primary'
      ? props.theme.color.primary
      : props.theme.color.secondary};
  padding: 10px;
  color: ${(props) => props.theme.color.light};
  width: 100%;
  border: none;
  font-size: 24px;
  font-weight: Bold;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
  :hover {
    cursor: pointer;
  }
`;
