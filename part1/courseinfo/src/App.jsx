/* eslint-disable react/prop-types */
// const Header = (props) => {
//   return <h1>{props.course}</h1>;
// };

// const Content = (props) => {
//   return (
//     <div>
//       <p>
//         {props.parts[0].name} {props.parts[0].exercises}
//       </p>
//       <p>
//         {props.parts[1].name} {props.parts[1].exercises}
//       </p>
//       <p>
//         {props.parts[2].name} {props.parts[2].exercises}
//       </p>
//     </div>
//   );
// };

// const Total = (props) => {
//   return (
//     <p>
//       Total number of exercises:
//       {props.parts[0].exercises +
//         props.parts[1].exercises +
//         props.parts[2].exercises}
//     </p>
//   );
// };

import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div> the app is used by pressing the buttons </div>;
  }
  return <div> button press history: {props.allClicks.join(" ")} </div>;
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text} </button>
);

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  };

  const handleClick = () => {
    console.log("clicked the button");
    setTotal(0);
  };

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right my nigga" />
      {right}
      <History allClicks={allClicks} />
      <button onClick={handleClick}>button</button>

      <p>total {total}</p>
    </div>
  );
};

export default App;
