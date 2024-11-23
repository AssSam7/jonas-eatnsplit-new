const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
    getBalanceStatusHTML: function () {
      if (this.balance < 0) {
        return (
          <p className="red">
            You owe {this.name} {Math.abs(this.balance)}$
          </p>
        );
      } else if (this.balance > 0) {
        return (
          <p className="green">
            {this.name} owes you {Math.abs(this.balance)}$
          </p>
        );
      }
      return <p>You and your friend are even</p>;
    },
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
    getBalanceStatusHTML: function () {
      if (this.balance < 0) {
        return (
          <p className="red">
            You owe {this.name} {Math.abs(this.balance)}$
          </p>
        );
      } else if (this.balance > 0) {
        return (
          <p className="green">
            {this.name} owes you {Math.abs(this.balance)}$
          </p>
        );
      }
      return <p>You and your friend are even</p>;
    },
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
    getBalanceStatusHTML: function () {
      if (this.balance < 0) {
        return (
          <p className="red">
            You owe {this.name} {Math.abs(this.balance)}$
          </p>
        );
      } else if (this.balance > 0) {
        return (
          <p className="green">
            {this.name} owes you {Math.abs(this.balance)}$
          </p>
        );
      }
      return <p>You and your friend are even</p>;
    },
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <AddFriendForm />
        <Button>Add friend</Button>
      </div>

      <SplitBillForm />
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.getBalanceStatusHTML()}

      <Button>Select</Button>
    </li>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function AddFriendForm() {
  return (
    <form className="form-add-friend">
      <label>👯 Friend name </label>
      <input type="text" />

      <label>🌄 Image URL</label>
      <input type="text" />

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
