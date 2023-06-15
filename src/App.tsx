import React from "react";
import Accordion from "./components/Accordion/Accordion";

const items = [{id : 1, name : "1"}, {id : 2, name : "2"}];
const initialValue = "Select";
function App() {

  return (
    <div>
      <Accordion items={items} initialValue={initialValue} selected="" onSelect={() => {}}/>
    </div>
  )
}

export default App;
