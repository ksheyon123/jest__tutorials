import React, { useEffect } from "react";

const App = () => {
  return <Child />;
};

const Child = () => {
  console.log("RENDER");

  useEffect(() => {
    console.log("EFFECT");
  }, []);

  console.log("RETURN");

  return <div>Hello world</div>;
};

export default App;
