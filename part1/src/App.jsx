 import {useState} from "react"

const App = (props) => {
    const [counter, setCounter] = useState(0); //devuelve el valor y una funcion que actualiza el valor

    console.log("render");
    const handleClick = (isPositive) => {
        let increment = isPositive ? 1 : -1
        setCounter(counter + increment)
    }
    console.liog

    return (
        <div>
            <h1>Hola curso de react</h1>
            <button onClick={() => {
                handleClick(true)
            }}>
                boton
            </button>
            <button onClick={() => {
                handleClick(false)
            }} >
                decrementar
            </button>
            <h2>{counter}</h2>
            <p>no se que dice aca</p>
        </div>
    )

}

 export default App
