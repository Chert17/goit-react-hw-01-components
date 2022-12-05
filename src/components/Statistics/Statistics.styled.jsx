import styled from '@emotion/styled';

export const StatsCard = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  margin-bottom: 20px;

  width: 310px;
  height: 120px;
  background-color: ${props => props.theme.colors.white};
`;

export const StatsList = styled.ul`
  display: flex;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  outline: 1px solid tomato;
  width: 62px;
  height: 50px;

  background-color: ${getRandomHexColor};
`;
