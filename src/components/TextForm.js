
import React, {useState} from "react"


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!","success");
    }

    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const handleClearClick = ()=>{
        let newText= '';
        setText(newText)
        props.showAlert("Text Cleared!","success");
    }

    const handleCopy = ()=>{
        console.log("I am copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Your Text Is Copied to Clipboard","success");
    }
    const handleExtraSpaces =()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces!","success");
    }

    const [text, setText] = useState(''); 
    return (
        <>
        <div>
            <div className="mb-3" style={{backgroundColor: props.mode==='dark'?'white':'#042743'}}> 
            <h1>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange}style={{backgroundColor: props.mode==='light'?'#042743':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container my-4" style={{backgroundColor: props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text summary</h1>
            <p>{text.split("").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split("").length}Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
        </>
    )
}
