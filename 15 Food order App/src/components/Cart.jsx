import React, { useContext } from "react";
import Modal from "./Modal";
import CartContex from "../store/CartContex";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContex";
import CartItem from "./CartItem";

const Cart = () => {
  const { items, addItem, removeItem } = useContext(CartContex);
  const { hideCart, showCheckout, progress } = useContext(UserProgressContext);

  const cartTotal = items.reduce((acum, item) => {
    return acum + item.quantity * item.price;
  }, 0);

  return (
    <Modal
      className="cart"
      open={progress === "cart"}
      onClose={progress === "cart" ? () => hideCart() : null}
    >
      <h2>{items.length > 0 ? "Your Cart" : "Your Cart is Empty"}</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onDecrease={() => removeItem(item.id)}
            onIncrease={() => addItem(item)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={() => hideCart()}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={() => showCheckout()}>Go to Cheackout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
