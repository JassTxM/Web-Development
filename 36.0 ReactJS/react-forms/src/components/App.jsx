import React from "react";

function App() {
  const [nameValue, setNameValue] = React.useState("");
  const [headingText, setHeadingText] = React.useState("");

  function handleChange(event) {
    setNameValue(event.target.value);
  }
  function handleClick(event) {
    setHeadingText(nameValue);
  }

  return (
    <div className="container">
      <h1>Hello,{headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={nameValue}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
