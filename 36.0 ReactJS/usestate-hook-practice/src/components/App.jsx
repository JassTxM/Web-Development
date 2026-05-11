import React from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  const [time, newTime] = React.useState(now);
  setInterval(latestTime, 1000);
  function latestTime() {
    let fTime = new Date().toLocaleTimeString();
    newTime(fTime);
  }

  // }
  //   function contTime() {
  //     let fTime = new Date().toLocaleTimeString();
  //     newTime(fTime);
  //   }
  //   setInterval(contTime, 1000);
  // }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={latestTime}>Get Time</button>
    </div>
  );
}

export default App;
