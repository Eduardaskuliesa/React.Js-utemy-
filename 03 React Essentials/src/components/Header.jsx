import React from "react";

const randomWords = ['Fundamental', 'Crucial', 'Core'];
  
const getRandomIndex = (max) => {
  return Math.floor(Math.random() * (max + 1))
}

const Header = () => {
  const content = randomWords[getRandomIndex(2)]
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {content} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};

export default Header;
