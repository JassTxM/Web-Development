import React from "react";

function App() {
  // var count = 0;
  const [count, setCount] = React.useState(0);

  function increase() {
    setCount(count + 1);
    // count++;
    // console.log(count);
    // ReactDOM.render(
    //   <div className="container">
    //     <h1>{count}</h1>
    //     <button onClick={increase}>+</button>
    //   </div>,
    //   document.getElementById("root")
    // );
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      {/* <h1>{count}</h1> */}
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
