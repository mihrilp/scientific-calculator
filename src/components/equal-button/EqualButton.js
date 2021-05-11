import React, { useContext } from "react";
import "./equal-button.css";
import * as math from "mathjs";
import { MyContext } from "../../MyContext";

function EqualButton({ name }) {
  const { userInput, setUserInput, stack } = useContext(MyContext);
  const myObject = {
    "√": "sqrt",
    "%": "/100*",
    "𝜋": "pi",
    "÷": "/",
    "×": "*",
  };

  const buttonClick = () => {
    const replaced = [...userInput]
      .map((letter) => {
        if (myObject[letter]) {
          return myObject[letter];
        } else {
          return letter;
        }
      })
      .join("");
    try {
      setUserInput(math.evaluate(replaced));
    } catch (error) {
      setUserInput(math.evaluate(replaced + ")"));
    }
  };

  return (
    <button className="equal" onClick={buttonClick}>
      {name}
    </button>
  );
}

export default EqualButton;
