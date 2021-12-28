import React from "react";

const Cart = (props) => {
  return (
    <div className="cart">
      <div className="cart-body">
        <div className="cart-title">{props.user.name}</div>
        <div className="cart-subtitle mb-2 text-muted">
          {props.user.company.name}
        </div>
        <div className="cart-text">{props.user.company.catchPhrase}</div>
      </div>
    </div>
  );
};

export default Cart;
