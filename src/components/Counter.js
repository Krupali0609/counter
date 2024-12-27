 import React, {useState} from 'react'
 
 const Counter = () => {
    //initialize
    const [counter, setCounter] = useState(0)

    //Increment 
    const incrementCounter=()=>{
        setCounter(counter+1)

    }

    //Decrement 
    const decrementCounter=()=>{
        setCounter(counter-1)

    }

    //Reset
    const resetCounter=()=>{
        setCounter(0)

    }
   return (
     <div style={{textAlign:"center", marginTop:"20px"}}>
        <h1> Counter: {counter}</h1>
        <button onClick={ ()=> incrementCounter()}style={{margin: "0 5px"}}>Increment</button>
        <button onClick={decrementCounter()} style={{margin: "0 5px"}}>Decrement</button>
        <button onClick={()=> resetCounter()} style={{margin: "0 5px"}}>Reset</button>
    </div>
   )
 };
 
 export default Counter