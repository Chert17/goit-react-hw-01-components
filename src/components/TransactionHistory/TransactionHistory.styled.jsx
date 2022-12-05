import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);

  width: 310px;

  margin: 10px auto 20px auto;
  background-color: ${props => props.theme.colors.white};
`;

export const Tr = styled.tr`
  :nth-of-type(even) {
    background-color: #d1d1d1b4;
  }
`;

export const TableHeadText = styled.th`
  background-color: ${props => props.theme.colors.accentColor};
  border: 1px solid black;
  padding: 10px;
  text-align: left;
  font-size: 18px;
  text-align: center;
  color: ${props => props.theme.colors.white};
`;

export const TableBodyText = styled.td`
  padding: 8px;
  border-bottom: 1px solid black;
  border: 1px solid rgb(0, 0, 0, 0.2);
  text-align: center;
`;
