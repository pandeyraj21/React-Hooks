//example create a mutable variable which will not re-render the components.
import React,{useState,useRef} from 'react'

function UseRefHooks() {
    const [myData,setMyData]=useState("");
    const inpulElement =useRef("");
  const changeStyle=()=>{

  inpulElement.current.style.backgroundColor="#82E0AA";
  inpulElement.current.focus();
  };
  return (
<>
<input
ref={inpulElement}
type='text' value={myData}
onChange={(e)=>setMyData(e.target.value)}
/>

<br />
<br />
<button onClick={changeStyle}>Submit</button>


</>
  )
}

export default UseRefHooks