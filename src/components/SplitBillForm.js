import { useState } from "react";
import Button from "./Button";

export default function SplitBillForm({ friend, updateBalance }) {
  const [bill, setBill] = useState({
    total: "",
    userExpense: "",
    paidBy: "you",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    updateBalance(
      bill.paidBy === "you"
        ? bill.userExpense - bill.total
        : bill.total - bill.userExpense
    );
  };

  const handleBillInput = (e) => {
    const { name, value } = e.target;

    if (name === "paidBy") {
      setBill((prevState) => ({ ...prevState, [name]: value }));
    } else {
      setBill((prevState) => ({ ...prevState, [name]: parseInt(value) }));
    }
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>

      <label>💸 Bill Value</label>
      <input
        name="total"
        type="number"
        value={bill.total}
        onChange={handleBillInput}
      />

      <label>🤑 Your expense</label>
      <input
        name="userExpense"
        type="number"
        value={bill.userExpense}
        onChange={handleBillInput}
      />

      <label>🧾 {friend.name}'s expense</label>
      <input
        name="friendExpense"
        type="number"
        value={
          parseInt(bill.total) - parseInt(bill.userExpense)
            ? parseInt(bill.total) - parseInt(bill.userExpense)
            : ""
        }
        disabled
      />

      <label>🤑 Who is paying the bill?</label>
      <select name="paidBy" value={bill.paidBy} onChange={handleBillInput}>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Add</Button>
    </form>
  );
}
