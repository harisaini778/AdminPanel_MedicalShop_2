import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const CartModule = () => {
  const cartData = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cartData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartData.map((item, index) => (
            <li key={index}>
              <p>Medicine Name: {item.medName}</p>
              <p>Medicine Description: {item.medDes}</p>
              <p>Medicine Price: {item.medPrice}</p>
              <p>Medicine Quantity: {item.medQuant}</p>
              <p>Total Price: {item.totalPrice}</p> {/* Add this line */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartModule;
