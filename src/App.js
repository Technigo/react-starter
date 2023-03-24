/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

// his defines a functional component called HelloWorld.
// The component returns a JSX element that renders the text "Hello World!" inside a p element.
const HelloWorld = () => {
  return <p>Hello World!</p>;
};
// This defines a functional component called App.
// The component is being exported using the export keyword so it can be used in other modules.
export const App = () => {
  // This line declares a state variable called visible and a function to update that state called setVisible.
  // The useState function is called with an initial state value of false.
  const [visible, setVisible] = useState(false);
  console.log(setVisible);

  // This is a button element that has an onClick handler attached to it.
  // When the button is clicked, the setVisible function is called with a callback function that toggles the value of visible.
  // This allows us to show or hide the HelloWorld component based on the current value of visible.
  return (
    <div>
      <button onClick={() => setVisible((prev) => !prev)}> Show / Hide </button>
      {visible && <HelloWorld />}
    </div>
  );
};
// This is a conditional rendering of the HelloWorld component.
// If visible is truthy (i.e., not false, 0, null, undefined, etc.), the HelloWorld component is rendered.
// Otherwise, nothing is rendered.
