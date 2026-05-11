import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const inputValue = event.target.name;

    setContact((prevValue) => {
      if (inputValue === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
          email: prevValue.email,
        };
      } else if (inputValue === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
          email: prevValue.email,
        };
      } else if (inputValue === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: newValue,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
