import React from 'react';
import ReactDOM from 'react-dom/client';
import Sum from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

let a=100;
let b=200;
// const name = "nikki";                          
root.render(
  <>

  <h1>sum is <Sum num1={a} num2={b} ></Sum></h1>
  <h2>sum is return 300 value</h2>
  {/* // <h1>Hello { Name } </h1> */}
   
  </>
  

   
);

                                                   