import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Footer } from './index.jsx';
import { Bt1 } from './index.jsx';
import HelloWorld from './index.jsx';
import { show2 } from './index.jsx';


const x = {textAlign:'center', textShadow:'2px 2px aqua',marginBottom:'100px'}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
  <h1 style={x}>Styling using Functional and Class Component</h1>
  <Footer/>
  <button className='bt2' onClick={()=>{show2()}}>TO SEE STYLING IN CLASS COMPONENT</button>
  <Bt1/>
  <HelloWorld/>
</>
);



// reportWebVitals();
