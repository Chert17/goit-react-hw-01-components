import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem.styled';
import { Chip } from './FriendListItem.styled';

export function FriendsListItem({ avatar, name, isOnline, id }) {
  return (
    <FriendListItem key={id}>
      <Chip typeV={isOnline} />
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendListItem>
  );
}

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
