import Button from "./Button";

export default function Friend({ friend, activeFriend, selectFriend }) {
  const getBalanceDetails = () => {
    if (friend.balance < 0) {
      return (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      );
    } else if (friend.balance > 0) {
      return (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      );
    }
    return <p>You and your friend are even</p>;
  };

  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {getBalanceDetails()}

      <Button
        onClick={() =>
          selectFriend((prevId) => (prevId !== friend.id ? friend.id : null))
        }
      >
        {activeFriend === friend.id ? "Close" : "Select"}
      </Button>
    </li>
  );
}
