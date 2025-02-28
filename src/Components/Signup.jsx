import React, { useEffect, useState } from 'react'

function Signup() {
    const [name,setName]=useState("");
    const[number,setNumber]=useState("");
    const [valid,setValid]= useState(false);
  useEffect(()=>{
    if(name!=="" && number!==""){
        setValid(true);
            }
            else{
        setValid(false);
            }
  },[name,number]);
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(valid){
        alert("Form Submitted");
    }
    else{
        alert("Fill the form");
    }
  }

  return (
    <div id="signup">
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            <input type="number"  onChange={(event)=>setNumber(event.target.value)} value={number}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Signup