import React, { useState } from "react";

const UserForm = ({ onAddToCart }) => {
  const [medName, setMedName] = useState("");
  const [medDes, setMedDes] = useState("");
  const [medPrice, setMedPrice] = useState("");
  const [medQuant, setMedQuant] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const medicineData = {
      medName,
      medDes,
      medPrice,
      medQuant,
    };

    onAddToCart(medicineData);

    setMedName("");
    setMedDes("");
    setMedPrice("");
    setMedQuant("");
  };

  return (
    <div>
      <h2>Add Medicine</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Medicine Name:</label>
          <input
            type="text"
            value={medName}
            onChange={(event) => setMedName(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Medicine Description:</label>
          <textarea
            value={medDes}
            onChange={(event) => setMedDes(event.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Medicine Price:</label>
          <input
            type="number"
            value={medPrice}
            onChange={(event) => setMedPrice(event.target.value)}
            required
          />
        </div>
        <div>
          <label>Medicine Quantity:</label>
          <input
            type="number"
            value={medQuant}
            onChange={(event) => setMedQuant(event.target.value)}
            required
          />
        </div>
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default UserForm;
