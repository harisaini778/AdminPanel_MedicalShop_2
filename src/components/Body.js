import React, { useState } from "react";
import UserForm from "../UserForm";
import MedicineDetails from "./MedicineDetails";

const Body = ({ onAddToCart }) => {
  const [medicineDetails, setMedicineDetails] = useState([]);

  const handleAddToCart = (medicineData) => {
    setMedicineDetails([...medicineDetails, medicineData]);
    onAddToCart(medicineData);
  };

  return (
    <div>
      <h2>Medicine Details</h2>
      <UserForm onAddToCart={handleAddToCart} />
      <MedicineDetails medicineDetails={medicineDetails} />
    </div>
  );
};

export default Body;
