//-------------------------Hooks----Effect Hook-----------------


import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    
  });

//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   }, []);  //to execute useEffect functions at once

  return (
    <div style={{textAlign: "center",color: "white",padding: "10%",backgroundColor: "green",}}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Example;