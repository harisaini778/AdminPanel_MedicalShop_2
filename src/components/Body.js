import React from "react";
import UserForm from "../UserForm";

const Body = (props) => {
  return (
    <div>
      <h2>Medicine Details</h2>
      <UserForm onAddToCart={props.onAddToCart} />
    </div>
  );
};

export default Body;
