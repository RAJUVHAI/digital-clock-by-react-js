import React, { useState } from "react";
import "./Main.css";
export default function Main() {
  let time = new Date().toLocaleTimeString();
  const [currTime, setTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(updateTime, 1000);

  return (
    <>
      <div className="watch">
        <h4>It's Digital Clock .</h4> <h1>{currTime}</h1>
      </div>
    </>
  );
}
