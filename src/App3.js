import React, { useState, useMemo, useEffect } from "react";

const slowFunc = (num) => {
  let t1 = performance.now();
  for (let x = 0; x <= 10000000; x++) {
    for (let y = 0; y <= 100; y++) {
    
    }
  }
  let t2 = performance.now();
  console.log("time taken by func => ", t2 - t1);
  return num * 2;
};

const App3 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [num, setNum] = useState(0);
  const doubleNUmber = useMemo(() => {
    return slowFunc(num);
  }, [num]);
  
  return (
    <div
      style={{ backgroundColor: darkMode ? "black" : "white", height: "500px" }}
    >
      <input onChange={handleChange} placeholder="Number" />
      <button onClick={() => setDarkMode((previousVal) => !previousVal)}>
        Dark Mode
      </button>
      <h2 style={{ color: darkMode ? "white" : "black" }}>{doubleNUmber}</h2>
    </div>
  );
};

export default App3;
