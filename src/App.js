import React, { useState, useEffect } from "react";
import "./App.css";
import usePrevious from "./hooks/usePrevious";
import useIsMount from "./hooks/useIsMount";
import { MyContext } from "./MyContext";
import Input from "./components/Input";
import {
  Button,
  ClearButton,
  DeleteButton,
  BackButton,
  ForwardButton,
  RadButton,
  DegButton,
} from "./components/Buttons";
import AnsButton from "./components/AnsButton";
import Operator from "./components/Operator";
import EqualButton from "./components/EqualButton";
import * as Icons from "./components/icons";

function App() {
  const [userInput, setUserInput] = useState("");
  const [stack, setStack] = useState([]);
  const [removed, setRemoved] = useState([]);
  const prevInput = usePrevious(userInput);
  const isMount = useIsMount();

  function getDifference(str1, str2) {
    var i = 0;
    var j = 0;
    var diff = "";

    while (j < str2.length) {
      if (str1[i] !== str2[j] || i === str1.length) diff += str2[j];
      else i++;
      j++;
    }
    return diff;
  }

  useEffect(() => {
    if (isMount) console.log("First Render");
    else {
      stack.push(getDifference(prevInput, userInput));
    }
  }, [userInput]);

  return (
    <MyContext.Provider
      value={{ userInput, setUserInput, stack, setStack, removed, setRemoved }}
    >
      <div className="App">
        <header className="App-header">
          <Icons.Calculator className="logo" />
          <h1>Scientific Calculator</h1>
        </header>
        <div className="calculator">
          <Input />
          <div className="flex-container">
            <div className="row firstRow">
              <div className="btn-group">
                <RadButton name="Rad" />
                <DegButton name="Deg" />
              </div>
              <BackButton name={<Icons.Back />} />
              <ForwardButton name={<Icons.Next />} />
              <AnsButton name="Ans" />
              <ClearButton name="AC" />
              <div className="delete">
                <DeleteButton name={<Icons.Backspace />} />
              </div>
              <div className="equal">
                <EqualButton name={<Icons.Equal />} />
              </div>
            </div>
            <div className="row">
              <Button name="(" />
              <Button name=")" />
              <Button name="," />
              <Button name="e" />
              <Button name="7" />
              <Button name="8" />
              <Button name="9" />
              <Operator name={<Icons.Divide />} type="divide" />
            </div>
            <div className="row">
              <Button name={<Icons.Pi />} type="pi" />
              <Button name="log" type="func" />
              <Button name={<Icons.XDegreeSquare />} type="degreesqr" />
              <Button name={<Icons.SquareRoot />} type="sqrt" />
              <Button name="4" />
              <Button name="5" />
              <Button name="6" />
              <Operator name={<Icons.Multiplication />} type="mul" />
            </div>
            <div className="row">
              <Button name={<Icons.XDegreeCube />} type="degreecube" />
              <Button name={<Icons.CubeRoot />} type="cbrt" />
              <Button name={<Icons.XPowerN />} type="xpowern" />
              <Button name={<Icons.NthRoot />} type="nthrt" />
              <Button name="1" />
              <Button name="2" />
              <Button name="3" />
              <Operator name={<Icons.Minus />} type="minus" />
            </div>
            <div className="row">
              <Button name="sin" type="func" />
              <Button name="cos" type="func" />
              <Button name="tan" type="func" />
              <Button name={<Icons.TenPowerX />} type="tenpowerx" />
              <Button name="%" />
              <Button name="0" />
              <Button name="." />
              <Operator name={<Icons.Plus />} type="plus" />
            </div>
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
