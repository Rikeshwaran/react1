import React from 'react'
import './Component1.css'   

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
        <img src="logo192.png" alt="" />
      </div>
      <div>
        <ul>
          <li>home</li>
        </ul>
        <p>1</p>
        <button onClick={Addfunction} id="button">sumbit now</button>
      </div>
    </div>
  )
}

export default Component1
