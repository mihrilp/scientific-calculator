import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import usePrevious from "./hooks/usePrevious";
import useIsMount from "./hooks/useIsMount";
import { MyContext } from "./MyContext";
import Input from "./components/input/Input";
import {
  Button,
  ClearButton,
  DeleteButton,
  BackButton,
  ForwardButton,
  RadButton,
  DegButton,
} from "./components/buttons/Buttons";
import AnsButton from "./components/AnsButton";
import Operator from "./components/operator/Operator";
import EqualButton from "./components/equal-button/EqualButton";
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
      <Container className="App">
        <Row className="App-header">
          <p>
            <Icons.Calculator className="logo" />
            Scientific Calculator
          </p>
        </Row>
        <Row className="calculator">
          <Col>
            <Row>
              <Input />
            </Row>
            <Row>
              <Col>
                <Row className="firstRow">
                  <Col>
                    <RadButton name="Rad" />
                  </Col>
                  <Col>
                    <DegButton name="Deg" />
                  </Col>
                  <Col>
                    <BackButton name={<Icons.Back />} />
                  </Col>
                  <Col>
                    <ForwardButton name={<Icons.Next />} />
                  </Col>
                  <Col>
                    <AnsButton name="Ans" />
                  </Col>
                  <Col>
                    <ClearButton name="AC" />
                  </Col>
                  <Col className="delete">
                    <DeleteButton name={<Icons.Backspace />} />
                  </Col>
                  <Col>
                    <EqualButton name={<Icons.Equal />} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button name="(" />
                  </Col>
                  <Col>
                    <Button name=")" />
                  </Col>
                  <Col>
                    <Button name="," />
                  </Col>
                  <Col>
                    <Button name="e" />
                  </Col>
                  <Col>
                    <Button name="7" className="number" />
                  </Col>
                  <Col>
                    <Button name="8" className="number" />
                  </Col>
                  <Col>
                    <Button name="9" className="number" />
                  </Col>
                  <Col>
                    <Operator name={<Icons.Divide />} type="divide" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button name={<Icons.Pi />} type="pi" />
                  </Col>
                  <Col>
                    <Button name="log" type="func" />
                  </Col>
                  <Col>
                    <Button name={<Icons.XDegreeSquare />} type="degreesqr" />
                  </Col>
                  <Col>
                    <Button name={<Icons.SquareRoot />} type="sqrt" />
                  </Col>
                  <Col>
                    <Button name="4" className="number" />
                  </Col>
                  <Col>
                    <Button name="5" className="number" />
                  </Col>
                  <Col>
                    <Button name="6" className="number" />
                  </Col>
                  <Col>
                    <Operator name={<Icons.Multiplication />} type="mul" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button name={<Icons.XDegreeCube />} type="degreecube" />
                  </Col>
                  <Col>
                    <Button name={<Icons.CubeRoot />} type="cbrt" />
                  </Col>
                  <Col>
                    <Button name={<Icons.XPowerN />} type="xpowern" />
                  </Col>
                  <Col>
                    <Button name={<Icons.NthRoot />} type="nthrt" />
                  </Col>
                  <Col>
                    <Button name="1" className="number" />
                  </Col>
                  <Col>
                    <Button name="2" className="number" />
                  </Col>
                  <Col>
                    <Button name="3" className="number" />
                  </Col>
                  <Col>
                    <Operator name={<Icons.Minus />} type="plus" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button name="sin" type="func" />
                  </Col>
                  <Col>
                    <Button name="cos" type="func" />
                  </Col>
                  <Col>
                    <Button name="tan" type="func" />
                  </Col>
                  <Col>
                    <Button name={<Icons.TenPowerX />} type="tenpowerx" />
                  </Col>
                  <Col>
                    <Button name="%" />
                  </Col>
                  <Col>
                    <Button name="0" className="number" />
                  </Col>
                  <Col>
                    <Button name="." />
                  </Col>
                  <Col>
                    <Operator name={<Icons.Plus />} type="plus" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </MyContext.Provider>
  );
}

export default App;
