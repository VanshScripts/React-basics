import {useState} from "react";  // use state propogates the change in UI part
function App() {
  
  let  [counter , setCounter] = useState(15)
  
  
  // let counter = 15
  const addValue=() =>{
    console.log("clicked" , counter );
      if(counter<10){
        setCounter(counter + 1)
      }
      
    
     
    }
  
  const subValue=() => {
    console.log("clicked" , counter);
    //setCounter(counter - 1)
    if(counter>0){
      setCounter(counter - 1)
    }

  }

  return (
    <>
   <h1> Vansh BABA</h1>
   <h2>Counter  value: {counter} </h2>
   <button onClick={addValue}> Add Value</button>
   <br></br>
   <button onClick={subValue}> Remove Value</button>
    </>
  )
}

export default App
