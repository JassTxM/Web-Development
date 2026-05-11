import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;

// import React from "react";

// function ToDoItem(props) {
//   const [isDone, setIsDone] = React.useState(false);

//   function handleClick() {
//     setIsDone((prevValue) => {
//       return !prevValue;
//     });
//   }

//   return (
//     <div onClick={handleClick}>
//       <li
//         style={
//           { textDecoration: isDone ? "line-through" : "none" }
//           //   isDone
//           //     ? { textDecoration: "line-through" }
//           //     : { textDecoration: "none" }
//         }
//       >
//         {props.text}
//       </li>
//     </div>
//   );
// }

// export default ToDoItem;
