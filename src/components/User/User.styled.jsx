import styled from '@emotion/styled';

export const UserCard = styled.div`
  outline: ${props => `2px solid ${props.theme.colors.accentColor}`};
  border-radius: 4px;
  padding: 30px;
  width: 250px;
  height: 250px;
  background-color: ${props => props.theme.colors.white};
  margin-bottom: 20px;
`;

export const UserDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserPhoto = styled.img`
  margin-bottom: 20px;
`;

export const UserInfo = styled.p`
  font-size: 16px;
  color: #4d597f;

  :not(:last-of-type) {
    margin-bottom: 10px;
  }

  :last-of-type {
    margin-bottom: 40px;
  }
`;

export const UserStatsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const UserStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StatsName = styled.span`
  color: #91d2f8;
`;

export const StatsValue = styled.span`
  font-weight: bold;
  font-size: 20px;
  color: #1f3089;
`;
