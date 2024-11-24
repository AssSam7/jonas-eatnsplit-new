import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isAddingFriend, setIsAddingFriend] = useState(false);
  const [friendsList, setFriendsList] = useState(initialFriends);

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friendsList} />
        {isAddingFriend && <AddFriendForm addFriends={setFriendsList} />}
        <Button onClick={() => setIsAddingFriend((prevState) => !prevState)}>
          {isAddingFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      <SplitBillForm />
    </div>
  );
}

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
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

      <Button>Select</Button>
    </li>
  );
}

function Button({ children, ...rest }) {
  return (
    <button className="button" {...rest}>
      {children}
    </button>
  );
}

function AddFriendForm({ addFriends }) {
  const [friendName, setFriendName] = useState("");

  const handleAddFriend = (e) => {
    console.log(e);
    e.preventDefault();

    addFriends((prevFriends) => [
      ...prevFriends,
      {
        id: (prevFriends.length + 1) * 223345,
        name: friendName,
        image: `https://i.pravatar.cc/48?u=${
          (prevFriends.length + 1) * 223345
        }`,
        balance: 0,
      },
    ]);
  };

  return (
    <form className="form-add-friend" onSubmit={handleAddFriend}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
        required
      />

      <label>🌄 Image URL</label>
      <input type="text" value="https://i.pravatar.cc/48" disabled />

      <Button>Add</Button>
    </form>
  );
}

function SplitBillForm() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>💸 Bill Value</label>
      <input type="text" />

      <label>🤑 Your expense</label>
      <input type="text" />

      <label>🧾 X's expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Add</Button>
    </form>
  );
}
