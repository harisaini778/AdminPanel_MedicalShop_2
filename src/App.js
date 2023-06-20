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
  const existingItemIndex = cartData.findIndex((item) => item.medName === medicineData.medName);

  if (existingItemIndex !== -1) {
    const updatedCartData = cartData.map((item, index) => {
      if (index === existingItemIndex) {
        const updatedItem = {
          ...item,
          medQuant: parseInt(item.medQuant) + parseInt(medicineData.medQuant),
          totalPrice: item.totalPrice + medicineData.medPrice * parseInt(medicineData.medQuant),
        };
        return updatedItem;
      }
      return item;
    });

    setCartData(updatedCartData);
  } else {
    const newItem = {
      medName: medicineData.medName,
      medDes: medicineData.medDes,
      medPrice: medicineData.medPrice,
      medQuant: medicineData.medQuant,
      totalPrice: medicineData.medPrice * parseInt(medicineData.medQuant),
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
