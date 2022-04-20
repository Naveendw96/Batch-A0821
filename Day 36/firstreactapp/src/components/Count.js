//-------------------------Hooks----State Hook-----------------
import { useState } from "react";

function Count() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  // const [naveen, setNaveen] = useState(0);    variable decleration

  return (
    <div
      style={{
        textAlign: "center",
        color: "white",
        padding: "10%",
        backgroundColor: "blue",
      }}
    >
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>   
      {/* setCount variable increase the count variable value by 1  */}
    </div>
  );
}

export default Count;
