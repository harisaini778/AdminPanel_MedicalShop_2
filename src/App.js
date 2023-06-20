import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import CartModule from "./components/CartModule";
import { CartContext } from "./components/CartContext";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [cartData, setCartData] = useState([]);

  const toggleCartHandler = () => {
    setCartIsShown(!cartIsShown);
  };

  const addToCartHandler = (medicineData) => {
  // Check if the item already exists in the cart
  const existingItem = cartData.find((item) => item.medName === medicineData.medName);

  if (existingItem) {
    // If the item exists, update the quantity and total price
    const updatedItem = {
      ...existingItem,
      medQuant: existingItem.medQuant + medicineData.medQuant,
      totalPrice: existingItem.totalPrice + medicineData.medPrice * medicineData.medQuant,
    };

    setCartData((prevCartData) => {
      // Replace the existing item with the updated item in the cart
      const updatedCartData = prevCartData.map((item) =>
        item.medName === existingItem.medName ? updatedItem : item
      );
      return updatedCartData;
    });
  } else {
    // If the item doesn't exist, add it to the cart
    const newItem = {
      medName: medicineData.medName,
      medDes: medicineData.medDes,
      medPrice: medicineData.medPrice,
      medQuant: medicineData.medQuant,
      totalPrice: medicineData.medPrice * medicineData.medQuant,
    };

    setCartData((prevCartData) => [...prevCartData, newItem]);
  }
};

  return (
    <div>
      <Header onToggleCart={toggleCartHandler} />
      <CartContext.Provider value={cartData}>
        {cartIsShown && <CartModule />}
        <Body onAddToCart={addToCartHandler} />
      </CartContext.Provider>
    </div>
  );
}

export default App;
