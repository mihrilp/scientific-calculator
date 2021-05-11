import React, { useContext } from "react";
import "./operator.css";
import { MyContext } from "../../MyContext";

function Operator({ name, type }) {
  const { userInput, setUserInput } = useContext(MyContext);
  return (
    <button
      className="operator"
      onClick={() => {
        switch (type) {
          case "plus":
            setUserInput(userInput + "+");
            break;
          case "minus":
            setUserInput(userInput + "-");
            break;
          case "mul":
            setUserInput(userInput + "×");
            break;
          default:
            setUserInput(userInput + "÷");
            break;
        }
      }}
    >
      {" "}
      {name}
    </button>
  );
}

export default Operator;
