import Calculator from "./components/Calculator";
import Header from "./components/Header";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIndetifier, newValue) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputIndetifier]: +newValue,
      };
    });
  };

  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header></Header>
      <Calculator onChange={handleChange} userInput={userInput}></Calculator>
      {!inputIsValid && (
        <p className="center">Duration can be negative or 0.</p>
      )}
      {inputIsValid && <Results input={userInput}></Results>}
    </>
  );
}

export default App;
