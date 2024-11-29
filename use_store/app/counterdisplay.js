import React from "react";

import Store from "./store";

const Counterdisplay = () => {
  const { count, multiply,increase } = Store();
  return (
    <div  style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        gap: "20px",
      }} >
      <h1>counter:{count}</h1>
      <button onClick={increase} style={{ width: "100px" }}>Increase</button>
      <button onClick={multiply} style={{ width: "100px" }}>Multiply</button>
    </div>
  );
};

export default Counterdisplay;
