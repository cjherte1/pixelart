import "./App.css";
import MyBox from "./MyBox.js";
import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import PreviewBox from "./PreviewBox.js";

function App() {
  const [color, setColor] = useState("#aabbcc");
  const [isDown, setIsDown] = useState(false);
  const [hasBorder, setHasBorder] = useState(true);
  const [isEyedropper, setIsEyedropper] = useState(false);

  var boxes = [];
  var previewboxes = [];
  var colors = Array(1024).fill("blue");
  for (let i = 0; i < 1023; ++i) {
    boxes.push(
      <MyBox
        id={i}
        onClick={isEyedropper ? getColor : handleClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      />
    );
  }

  for (let i = 0; i < 1023; ++i) {
    previewboxes.push(<PreviewBox id={i + 2000} color={colors[i]} />);
  }

  function handleClick(e) {
    e.target.style.backgroundColor = color;
    var num = e.target.id;
    colors[num] = color;
  }

  function handleHover(e) {
    if (isDown === true) {
      e.target.style.backgroundColor = color;
    }
  }

  function getColor(e) {
    setColor(e.target.style.backgroundColor);
    setIsEyedropper(false);
  }

  function gridHandler(e) {
    for (let a of document.getElementsByClassName("MyBox")) {
      hasBorder
        ? (a.style.borderWidth = "0")
        : (a.style.borderWidth = "0.05em");
    }
    hasBorder ? setHasBorder(false) : setHasBorder(true);
  }

  document.body.addEventListener("mousedown", handleMouseDown);
  document.body.addEventListener("mouseup", handleMouseUp);

  function handleMouseUp(e) {
    setIsDown(false);
  }

  function handleMouseDown(e) {
    setIsDown(true);
  }

  function eyedropHandler(e) {
    setIsEyedropper(true);
  }

  function resetHandler(e) {
    for (let a of document.getElementsByClassName("MyBox")) {
      a.style.backgroundColor = "white";
    }
  }

  function handlePreview(b) {
    for (let a of document.getElementsByClassName("PreviewBox")) {
      a.style.backgroundColor = "gray";
    }
  }

  return (
    <div className="App">
      <div className="Banner"> Pixel Art Maker </div>
      <div className="PickerContainer">
        <button className="resetButton" onClick={resetHandler}>
          Reset
        </button>
        <button className="gridButton" onClick={gridHandler}>
          Show/Hide Grid
        </button>
        <HexColorPicker color={color} onChange={setColor} />
        <button className="eyedropButton" onClick={eyedropHandler}>
          Eyedrop Tool
        </button>
        <button className="previewButton" onClick={handlePreview}>
          Preview
        </button>
      </div>
      <div className="Canvas">{boxes}</div>
      <div className="smallCanvas">{previewboxes}</div>
    </div>
  );
}

export default App;
