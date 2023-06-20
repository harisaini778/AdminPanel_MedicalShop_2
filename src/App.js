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
  const existingItem = cartData.find((item) => item.medName === medicineData.medName);

  if (existingItem) {
    const updatedItem = {
      ...existingItem,
      medQuant: Number(existingItem.medQuant) + Number(medicineData.medQuant), // Convert to number
      totalPrice: existingItem.totalPrice + medicineData.medPrice * medicineData.medQuant,
    };

    setCartData((prevCartData) => {
      const updatedCartData = prevCartData.map((item) =>
        item.medName === existingItem.medName ? updatedItem : item
      );
      return updatedCartData;
    });
  } else {
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
