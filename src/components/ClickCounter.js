import React, { useState } from "react";

function ClickCounter(props) {
  let [count, setCount] = useState(0);
  let [timerId, setTimerId] = useState();

  function plus() {
    setTimerId(
      (timerId = setInterval(() => {
        setCount((num) => {
          return num + 1;
        });
      }, 1))
    );
  }

  function minus() {
    clearInterval(timerId);
    setTimerId(0);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <div className="container">
        <h2 className="h">
          {props.title ? props.title : "카운터(이름을 지정해주세요)"}
        </h2>
        <hr />
        <div className="myButton" onClick={reset}>
          Count : {count}
        </div>
        <div className="h">timerId : {timerId}</div>
        <hr />
        <button className="myButton" onClick={plus}>
          start
        </button>{" "}
        <button className="myButton" onClick={minus}>
          stop
        </button>
      </div>
    </>
  );
}

export default ClickCounter;
