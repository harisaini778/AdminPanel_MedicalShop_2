import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1>Admin Panel</h1>
      <button onClick={props.onToggleCart}>Cart</button>
    </header>
  );
};

export default Header;
