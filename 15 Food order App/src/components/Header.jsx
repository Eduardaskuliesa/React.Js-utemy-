import React, { useContext, useState } from "react";
import logo from "../assets/logo.jpg";
import Modal from "./Modal";
import Cart from "./Cart";
import Button from "./UI/Button";
import CartContex from "../store/CartContex";
import UserProgressContext from "../store/UserProgressContex";

const Header = () => {
  const { items } = useContext(CartContex);
  const {showCart} = useContext(UserProgressContext)

  const totalCartItems = items.reduce((acum, item) => {
    return acum + item.quantity;
  }, 0);
  
  const handleShowCart = () => {
    showCart()
  }

  return (
    <>
      <header id="main-header">
        <div id="title">
          <h1>Food Ordering App</h1>
          <img src={logo} alt="" />
        </div>
        <nav>
          <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
        </nav>
      </header>
    </>
  );
};

export default Header;
