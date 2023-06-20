import React from "react";

const MedicineDetails = ({ medicineDetails }) => {
  return (
    <div>
      <h3>Medicine Details:</h3>
      {medicineDetails.map((medicine, index) => (
        <div key={index}>
          <h4>{medicine.medName}</h4>
          <p>Description: {medicine.medDes}</p>
          <p>Price: {medicine.medPrice}</p>
          <p>Quantity: {medicine.medQuant}</p>
        </div>
      ))}
    </div>
  );
};

export default MedicineDetails;
