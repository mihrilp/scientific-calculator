import React, { useContext } from "react";
import "./input.css";
import { MyContext } from "../../MyContext";

function Input() {
  const { userInput } = useContext(MyContext);
  return <input type="text" defaultValue={userInput} />;
}

export default Input;
