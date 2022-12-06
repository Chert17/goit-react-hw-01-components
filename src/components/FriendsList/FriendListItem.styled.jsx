import styled from '@emotion/styled';

export const FriendListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  outline: ${props => `2px solid ${props.theme.colors.accentColor}`};
  background-color: ${props => props.theme.colors.white};
  border-radius: 4px;
  width: 310px;

  :not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

const isOnlineColor = ({ typeV, theme }) => {
  switch (typeV) {
    case false:
      return theme.colors.red;
    case true:
      return theme.colors.green;
    default:
      return '#ccc';
  }
};

export const Chip = styled.span`
  margin-left: 4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${isOnlineColor};
`;
