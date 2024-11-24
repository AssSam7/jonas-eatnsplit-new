import { useState } from "react";
import Button from "./Button";

export default function AddFriendForm({ addFriends }) {
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
