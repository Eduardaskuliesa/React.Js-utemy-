import React, { useContext } from "react";
import Modal from "./Modal";
import CartContex from "../store/CartContex";
import { currencyFormatter } from "../utils/formatting";
import Error from "./Error";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContex";
import useHttp from "../hooks/useHttp";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

const Checkout = () => {
  const cartCtx = useContext(CartContex);
  const userProgressCtx = useContext(UserProgressContext);

  const { data, sendRequest, loading, error, clearData } = useHttp(
    "http://localhost:3000/orders",
    requestConfig
  );

  const cartTotal = cartCtx.items.reduce((acum, item) => {
    return acum + item.quantity * item.price;
  }, 0);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          totalPrice: cartTotal,
          customer: customerData,
        },
      })
    );
  };

  const handleFinish = () => {
    userProgressCtx.hideCeckout();
    cartCtx.clearCart();
    clearData();
  };

  let actions = (
    <>
      <Button
        type="button"
        textOnly
        onClick={() => userProgressCtx.hideCeckout()}
      >
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (loading) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Succes!</h2>
        <p>Your order was submitted successfully.</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={() => userProgressCtx.hideCeckout()}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount:{currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Adress" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Error title="Failed to submit order" message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
