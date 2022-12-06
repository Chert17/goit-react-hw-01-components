import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendListItem';

export function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return (
          <FriendsListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
