import React, {useState} from 'react';

function Counter () {
    var [count ,setCount] = useState(0);
    const increment = ()=>{
        setCount(count +1);
    }
    const decrement = ()=>{
        if (count>0){
        setCount(count-1);
        }
    } 
    const reset = ()=>{
        setCount(count=0);
    } 


  return (
    <div>
        <h1>Count : {count} </h1>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
      
    </div>
  )
}

export default Counter;