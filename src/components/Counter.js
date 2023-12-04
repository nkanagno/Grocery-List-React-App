import { useState } from "react"






function Counter(){
    
    const [counterNum,setcounterNum] =useState(0)
    const handleclick = () =>{
        setcounterNum(counterNum + 1)
    }
    return (
    <div>
        
    <button onClick={handleclick}>click me to increase</button>
    {counterNum}
    </div>
    );

}

export default Counter;