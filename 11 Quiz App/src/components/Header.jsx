import quizLogo from "../assets/quiz-logo.png";
import React from "react";

const Header = () => {
  return (
    <header>
      <img src={quizLogo} alt="quizLogo" />
      <h1>ReactQuiz</h1>
    </header>
  );
};

export default Header;
