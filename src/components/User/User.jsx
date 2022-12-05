import PropTypes from 'prop-types';
import { UserCard } from './User.styled';
import { UserDesc } from './User.styled';
import { UserPhoto } from './User.styled';
import { UserInfo } from './User.styled';
import { UserStatsList } from './User.styled';
import { UserStatsItem } from './User.styled';
import { StatsName } from './User.styled';
import { StatsValue } from './User.styled';

// import {
//   UserCard,
//   UserDesc,
//   UserPhoto,
//   UserInfo,
//   UserStatsList,
//   UserStatsItem,
//   StatsName,
//   StatsValue,
// } from './User.styled';

export function User({ avatar, userName, tag, location, stats }) {
  return (
    <UserCard>
      <UserDesc>
        <UserPhoto
          src={avatar}
          alt={userName}
          className="avatar"
          width="60"
          height="60"
        />
        <UserInfo>{userName}</UserInfo>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </UserDesc>

      <UserStatsList>
        <UserStatsItem>
          <StatsName>Followers</StatsName>
          <StatsValue>{stats.followers}</StatsValue>
        </UserStatsItem>
        <UserStatsItem>
          <StatsName>Views</StatsName>
          <StatsValue>{stats.views}</StatsValue>
        </UserStatsItem>
        <UserStatsItem>
          <StatsName>Likes</StatsName>
          <StatsValue>{stats.likes}</StatsValue>
        </UserStatsItem>
      </UserStatsList>
    </UserCard>
  );
}

User.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
