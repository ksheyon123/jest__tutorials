import React, {useState} from "react";
import Button from "./components/Button/Button";
import Accordion from "./components/Accordion/Accordion";

const items = [{id : 1, name : "1"}, {id : 2, name : "2"}];
const initialValue = "Select";
function App() {
  const [name, setName] = useState<string>("");

  const onClick = () => {
    setName("Button1");
  }

  return (
    <div>
      <Accordion items={items} initialValue={initialValue} selected="" onSelect={() => {}}/>
    </div>
  )
}

export default App;
