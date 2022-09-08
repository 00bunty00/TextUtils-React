import React, {useState} from 'react';

function TextForm(props) {

  const [text, setText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert('The text changed to upper case', 'success');
  }
  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert('The text changed to lower case', 'success');
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleClearText = ()=> {
    setText('');
    props.showAlert('The text has been cleared', 'warning');
  }
  const handleCopyText = ()=> {
    let tempText = document.getElementById('myBox');
    tempText.select();
    navigator.clipboard.writeText(tempText.value);
    props.showAlert('The text has been copied', 'success');
  }
  const handleWhiteSpaces = ()=> {
    let tempText = text.split(/[ ]+/);
    setText(tempText.join(" "));
    props.showAlert('The extra white spaces has been cleared', 'success');
  }
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control"style={{background: props.mode === 'dark'? '#222529': 'white',color: props.mode === 'dark'? 'white': 'black'}} value={text} onChange={handleOnChange} placeholder='Enter your text here ...' id="myBox" rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.mode === 'dark'? 'light' : 'dark'} mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className={`btn btn-${props.mode === 'dark'? 'light' : 'dark'} mx-2`} onClick={handleLowClick}>Convert to Uppercase</button>
        <button className={`btn btn-${props.mode === 'dark'? 'light' : 'dark'} mx-2`} onClick={handleClearText}>Clear Text</button>
        <button className={`btn btn-${props.mode === 'dark'? 'light' : 'dark'} mx-2`} onClick={handleCopyText}>Copy Text</button>
        <button className={`btn btn-${props.mode === 'dark'? 'light' : 'dark'} mx-2`} onClick={handleWhiteSpaces}>Clear extra white spaces</button>
      </div>
      <div className="container my-4" style={{color: props.mode === 'dark'? 'white': 'black'}}>
        <h2>Your text summary</h2>
        <p>{text.length? (text[text.length - 1] === ' '? (text.split(/[ ]+/).length - 1) : text.split(/[ ]+/).length) : '0'} words and {text.length} characters</p>
        <p>{text.length? 0.008*text.split(' ').length : '0'} Minutes read.</p>
        <h2>Preview</h2>
        <p>{text.length? text : 'Enter something in the above text box to preview.'}</p>
      </div>
    </>
  )
}

export default TextForm