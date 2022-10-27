// import { useState } from "react"
import React from "react"
export function Footer(){
    return(<>
        <button className='bt1' onClick={()=>{show()}}>TO SEE STYLING IN FUCNTIONAL COMPONENT</button>

        </>
        )
}
function show(){
    const x = document.getElementById("f1")
    if(x.style.visibility=='visible')
    x.style.visibility='hidden'
    else
    x.style.visibility='visible'
   

}
export function Bt1(){
    return(
        <>
        <div id="f1">
            <h2>this is created using functional component</h2>
            <h5> This is done using external CSS</h5>
            <h5 style={{color:'blue'}}>this is done using inline css</h5>
        </div></>
    )
}

class HelloWorld extends React.Component {
    render() {
      return <>
       <div id="f2">
         <h2>this is created using class component</h2>
         <h5>This is done using external css</h5>
         <h5 style={{color:'red'}}>this is done using inline css</h5>
        </div>;
       </>
    }
  }
  
  export default HelloWorld;

  export function show2(){
    const x = document.getElementById("f2")
    if(x.style.visibility=='visible')
    x.style.visibility='hidden'
    else
    x.style.visibility='visible'
  }



