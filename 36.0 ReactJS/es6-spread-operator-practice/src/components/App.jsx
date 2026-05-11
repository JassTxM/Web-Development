import React from "react";

function App() {
  const [data, setData] = React.useState("");
  const [newData, setNewData] = React.useState([]);

  function handleData(event) {
    const newValue = event.target.value;
    setData(newValue);
  }
  function handleClick() {
    setNewData((prevData) => {
      return [...prevData, data];
    });
    setData("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleData} type="text" value={data} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newData.map((todoData) => (
            <li>{todoData}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
