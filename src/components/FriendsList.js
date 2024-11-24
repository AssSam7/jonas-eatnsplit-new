import Friend from "./FriendCard";

export default function FriendsList({ friends, ...rest }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} {...rest} />
      ))}
    </ul>
  );
}
