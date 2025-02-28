import React from 'react'
import './Component1.css'   

import 'bootstrap/dist/css/bootstrap.css';

function Addfunction() {
  var x = document.getElementById("button");
  x.addEventListener("click", function() {
    alert("Hello World!");
  });
}

function Component1() {
  return (
    <div>
      <div>
        <button onClick={Addfunction} id="button" className="">sumbit now</button>
      </div>
    </div>
  )
}

export default Component1
