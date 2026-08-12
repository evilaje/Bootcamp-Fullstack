 import {useState} from "react"
const Counter = ({ number }) => <h2> {number} </h2>


const Button = ({ onClick, text }) => {
	return (
		<button onClick= {onClick}> {text} </button>
	)
}

const OldIndex = () => {
	const [counter, setCounter] = useState(0); //devuelve el valor y una funcion que actualiza el valor
	console.log("rendering this component with counter value: ", counter);
	const incrementByOne = () => setCounter(counter + 1);
	const decrementByOne = () => setCounter(counter - 1);
	const handleReset = () => setCounter(0);
	return (
		<div>
			<h1>Hola curso de react</h1>

			<Button onClick={incrementByOne} text={"Incrementar"}></Button>
			<Button onClick={decrementByOne} text={"Decrementar"}></Button>
			<Button onClick={handleReset} text={"Resetear"}></Button>

			<Counter number={counter}></Counter>
			<p>no se que dice aca</p>
		</div>
	)
}

const History = ({ allClicks, total }) => {
	if (allClicks.length === 0) {
		return (
			<div>
				<h2>The app is used by pressing the buttons</h2>
			</div>
		)
	}
	return (
		<div>
			<p>Button press history: {allClicks.join(" ")}</p>
			<p>Total: {total}</p>
		</div>

	)
}

const OldIndex2 = () => {
	const [clicks, setClicks] = useState({
		left: 0,
		right: 0,
	})
	const [allClicks, setAll] = useState([])
	const [total, setTotal] = useState(0)

	console.log("Left: ", clicks.left, "Right: ", clicks.right);

	//utilizando el spread operetor dentro de la funcion de actualizacion de estado y utilizando una variable de estado previo para mas seguridad
	const handleRight = () => {
		setAll(allClicks.concat("R"))
		const updatedRight =  clicks.right + 1
		setClicks( {...clicks, right: updatedRight} )
		setTotal(clicks.left + updatedRight)
	}

	//Sin utilizar variable previa pero con spread operator
	const handleLeft = () => {
		setAll(allClicks.concat("L"));
		const updatedLeft = clicks.left + 1
		setClicks( {...clicks, left: updatedLeft} );
		setTotal(updatedLeft + clicks.right);
	}
	console.log(clicks.left, clicks.right, total)
	return (
		<div>
			<Button onClick={handleLeft} text={"Left"}></Button>
			<Button onClick={handleRight} text={"Right"}></Button>
			<History allClicks={allClicks} total={total}></History>
		</div>
	)

}


const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>
        thousand
      </button>
      <button onClick={() => setToValue(0)}>
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
        increment
      </button>
    </div>
  )
}



 export default App
