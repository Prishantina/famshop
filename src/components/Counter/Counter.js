import {useState} from "react"

const Counter = () =>{

    const stock = 5
    console.log(useState())
    const [count, setCount] = useState(0)
    
    const increment = () =>{
        console.log ("+")
        if (count < stock){
            setCount(count + 1)
        }
    }

    const decrement = () =>{
        console.log ("-")
        if (count > 0){
            setCount(count - 1)
        }
        
    }

    return(
        <div>
            <button onClick={increment}>AGREGAR</button>
            <p>{count}</p>
            <button onClick={decrement}>QUITAR</button>
        </div>
    )

}

export default Counter