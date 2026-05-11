import React from "react";

function App() {
  const [fullName, setFullName] = React.useState({
    fName: "",
    lName: "",
  });
  // const [fName, setFName] = React.useState("");
  // // const [lName, setLName] = React.useState("");

  // function handleFName(event) {
  //   setFName(event.target.value);
  // }
  // // function handleLName(event) {
  // //   setLName(event.target.value);
  // // }

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputValue = event.target.name;
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
    // setFullName((prevValue) => {
    //   if (inputValue === "fName") {
    //     return {
    //       fName: newValue,
    //       lName: prevValue.lName,
    //     };
    //   } else if (inputValue === "lName") {
    //     return {
    //       fName: prevValue.fName,
    //       lName: newValue,
    //     };
    //   }
    // });
  }

  return (
    <div className="container">
      <h1>
        Hello, {fullName.fName} {fullName.lName}
        {/* {fName} */}
        {/* {lName} */}
      </h1>
      <form>
        <input
          name="fName"
          // onChange={handleFName}
          onChange={handleChange}
          placeholder="First Name"
          // value={fName}
          // value={fullName.fName}
        />
        <input
          name="lName"
          // onChange={handleLName}
          onChange={handleChange}
          placeholder="Last Name"
          // value={fullName.lName}
          // value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
