import {useState} from "react";

const Contador= () => {
    const [counter, setCounter]= useState(0);
    const increase= ()=> setCounter(counter +1);
    const decrement=()=>{
        if (counter>0){
            setCounter(counter -1)

        };
       

    };  
    const reset= ()=> setCounter(0);
    return(
        <div>
             <div>
            
            <button onClick= {increase}>+</button>
            {counter}
            <button onClick= {decrement}>-</button>
            <div>
                <button onClick= {reset}>Reset</button>
            </div>
            
            
            </div>
        </div>
    )
}

export default Contador
