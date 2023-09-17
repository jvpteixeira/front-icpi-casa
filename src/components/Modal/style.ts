import styled from 'styled-components';

export const ModalStyles = {};

export const ModalTitle = styled.h1`
  font-size: 22px;
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalCloseButton = styled.button`
  background-color: ${(props) => props.theme.color.modalCloseButton};
  padding: 8px;
  border-radius: 8px;
  border: none;
  :hover {
    cursor: pointer;
  }
`;
