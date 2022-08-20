import './App.css';
import React from "react";
import {useState} from "react";

const App =()=> {

  const [input, setInput] = useState("");
   const clickHandler = (event) =>{
     setInput(input.concat(event.target.value))
   }
   const clearHandler = ()=>{
    setInput("");
   }
   const resultHandler = () =>{
    setInput(eval(input));
   }

  return (
    <>
    <div class="container">
        <h1 class="head">Calculator</h1>
        <div class="form">
            <input type="text" name="output" class="answer" value={input}/><br></br>
            <input type="button" value="7" onClick={clickHandler} class="button"/>
            <input type="button" value="8" onClick={clickHandler} class="button"/>
            <input type="button" value="9" onClick={clickHandler} class="button"/>
            <input type="button" value="+" onClick={clickHandler} class="button"/>
            <br></br>
            <input type="button" value="4" onClick={clickHandler} class="button"/>
            <input type="button" value="5" onClick={clickHandler} class="button"/>
            <input type="button" value="6" onClick={clickHandler} class="button"/>
            <input type="button" value="-" onClick={clickHandler} class="button"/>
            <br></br>
            <input type="button" value="1" onClick={clickHandler} class="button"/>
            <input type="button" value="2" onClick={clickHandler} class="button"/>
            <input type="button" value="3" onClick={clickHandler} class="button"/>
            <input type="button" value="*" onClick={clickHandler} class="button"/>
            <br></br>
            <input type="button" value="." onClick={clickHandler} class="button"/>
            <input type="button" value="0" onClick={clickHandler} class="button"/>
            <input type="button" value="/" onClick={clickHandler} class="button"/>
            <input type="button" value="=" onClick={resultHandler} class="equal"/>
            <br></br>
            <input type="button" value="C" onClick={clearHandler} class="clear"/>
        </div>
     </div>
    </>
  );
}

export default App;
