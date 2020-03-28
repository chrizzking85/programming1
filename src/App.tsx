import * as React from "react";
import {SyntheticEvent} from "react";
import "./styles.css";

export default function App() {
  
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Slider />
    </div>
  );
}

function Slider () {
  const [inputVal, setInputVal] = React.useState(0)
  const inputEl = React.useRef(null)

  function handleChange (event: SyntheticEvent) {
    setInputVal(event.target.value)
  }
  
    return(
      <div>
        
        <input ref={inputEl} type="range" min="0" max="255" step="1" defaultValue="0" onChange={handleChange}/>
        <br />
        <label>Slider - {inputVal}</label>
      </div>
    )
  }


