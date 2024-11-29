"use client";
import React from "react";

import Store from "./store";
import Counterdisplay from "./counterdisplay";
import MyForm from "./localstorage/myform";

const Counter = () => {
  const { count, increase, decrease, reset, } = Store();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        gap: "20px",
      }}
    >
      <h1>counter:{count}</h1>
      <button onClick={increase} style={{ width: "100px" }}>
        Increase
      </button>
      <button onClick={decrease} style={{ width: "100px" }}>
        Decrease
      </button>
      <button onClick={reset} style={{ width: "100px" }}>
        Reset
      </button>
      <Counterdisplay/>
      <MyForm/>
    </div>
  );
};

export default Counter;
