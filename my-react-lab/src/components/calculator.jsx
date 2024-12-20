import React, {useState} from 'react';

function Calculator () {
    const [num,setNum] = useState()
    const [num2,setNum2] = useState()
    const [addition,setAdd] = useState()
    const [sub, setSub] = useState();
    const [mult,setMult] = useState()
    const [divide,setDivide] = useState()
    
    const Addition = ()=>{
        setAdd(Number(num)+Number(num2));
    }
    const Sub = ()=>{
        setSub(Number(num)-Number(num2));
    }
    const Multi = ()=>{
        setMult(Number(num)*Number(num2));
    }
    const Divide = ()=>{
        setDivide(Number(num)/Number(num2));
    }  


  return (
<div>
    <h1>Gu's Calculator</h1>
    <input
    type="number"
    placeholder="Enter first number"
    value={num}
    onChange={(e) => setNum(e.target.value)}
/>
    <input
    type="number"
    placeholder="Enter Second number"
    value={num2}
    onChange={(e) => setNum2(e.target.value)}
/>

<div>
          <button onClick={Addition}>add</button>
          <button onClick={Sub}>subtract</button>
          <button onClick={Multi}>multiply</button>
          <button onClick={Divide}>divide</button>
        </div>
        <h5>addition: {addition}</h5>
        <h5>subtract :{sub}</h5>
        <h5>multiply: {mult}</h5>
        <h5>divide :{divide}</h5>
      </div>
  )
}

export default Calculator;
