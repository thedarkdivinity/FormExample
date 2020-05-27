import React, { useState } from "react";
const App=()=>{
  let [data,setData]=useState("");
  let [finaldata,setFinalData]=useState("");
  const cli=()=>{

    setFinalData(data);
    

  }
  const disp=(e)=>{

    setData(e.target.value);
  }


  return(
    <div className="main">
      <div className="cd">
      <h1>Hello {finaldata} </h1>
      <br/>
    <input type="text" onChange={disp} ></input>
    <button type="button" onClick={cli} value={data} >Submit</button>
    </div>
    </div>
  )
} 
export default App;