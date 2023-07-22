import React, { useState } from "react";

export default function Form(props) {
  let makeUpper = () => {
    setText(text.toUpperCase());
  };
  let makeChange = (event) => {
    setText(event.target.value);
  };
  let makeLower = () => {
    setText(text.toLowerCase());
  };
  let cleanup = () => {
    setText("");
  };
  const [text, setText] = useState("Enter Text");
  return (
    <div style = {{color : props.mode === 'light' ? 'black' : 'white'}}>
      <div className="mb-3 mx-3 my-3" style = {{color : props.mode === 'light' ? 'black' : 'white'}}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label" style = {{backgroundColor : props.mode === 'light' ? 'white' : 'grey'}}>
          <h3>{props.heading}</h3>
        </label>
        <textarea
          style = {{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color : props.mode === 'light' ? 'black' : 'white'}}
          className="form-control"
          value={text}
          onChange={makeChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-2" onClick={makeUpper}>
          Conver To UpperCase
        </button>
        <button className="btn btn-secondary mx-2 my-2" onClick={makeLower}>
          Convert To LowerCase
        </button>
        <button className="btn btn-danger" onClick={cleanup}>
          Clear
        </button>
      </div>
      <div className="mx-3">
        <h3>Summary</h3>
        <p>
          Your text has {text.split(" ")[0] === '' ? 0 : text.split(" ").length} words
        </p>
      </div>
    </div>
  );
}
