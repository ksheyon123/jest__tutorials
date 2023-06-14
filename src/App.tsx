import React, {useState} from "react";
import Button from "./components/Button/Button";

function App() {
  const [name, setName] = useState<string>("");

  const onClick = () => {
    setName("Button1");
  }

  return (
    <div>
      <Button name={name} onClick={onClick} />
    </div>
  )
}

export default App;
