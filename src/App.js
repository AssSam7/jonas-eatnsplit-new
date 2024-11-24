import { useEffect, useState } from "react";
import FriendsList from "./components/FriendsList";
import AddFriendForm from "./components/AddFriendForm";
import SplitBillForm from "./components/SplitBillForm";
import Button from "./components/Button";

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
  const [selectedFriend, setSelectedFriend] = useState(null);

  const calculateSplit = (amount) => {
    setFriendsList((prevFriends) =>
      prevFriends.map((friend) =>
        friend.id === selectedFriend ? { ...friend, balance: amount } : friend
      )
    );

    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friendsList}
          activeFriend={selectedFriend}
          selectFriend={setSelectedFriend}
        />
        {isAddingFriend && <AddFriendForm addFriends={setFriendsList} />}
        <Button onClick={() => setIsAddingFriend((prevState) => !prevState)}>
          {isAddingFriend ? "Close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && (
        <SplitBillForm
          friend={
            friendsList.filter((friend) => friend.id === selectedFriend)[0]
          }
          updateBalance={calculateSplit}
        />
      )}
    </div>
  );
}
