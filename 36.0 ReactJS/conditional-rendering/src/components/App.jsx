import React from "react";
import Login from "./Login";

var isLogged = false;

const currentTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {
        /* {isLogged === true ? <h1>Hello</h1> : <Login />} */
        // currentTime > 12 ? <h1>Why are you still working?</h1> : null
        currentTime > 12 && <h1>Why are you still working?</h1>
      }
    </div>
  );
}

export default App;
