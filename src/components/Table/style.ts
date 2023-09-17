import styled from 'styled-components';

export const TableStyled = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
`;

export const TableHeaderStyled = styled.thead`
  border: 1px solid ${(props) => props.theme.color.primary};
  border-left: none;
  border-right: none;

  th {
    padding: 20px;
  }
`;

export const TableBodyStyled = styled.tbody`
  td {
    padding: 20px;
    text-align: center;
  }
`;
