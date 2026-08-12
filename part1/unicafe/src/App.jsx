import { useState } from 'react'
const Button = ({ onClick, text}) => {
	return (
		<button onClick={onClick}>
			{text}
		</button>
	)
}

const Stat = ({ text, amount }) => {
	return (
		<tr>
			<td>
				{text}
			</td>
			<td>
				{amount}
			</td>
		</tr>
	)
}
const Statistics = ({ good, neutral, bad}) => {
	if (good === 0 && neutral === 0 && bad === 0) {
		return <h1>No feedback given</h1>
	}
	return (
		<div>
			<h1>Statistics</h1>
			<table>
				<tbody>
					<Stat text={"Good"} amount={good}></Stat>
					<Stat text={"Neutral"} amount={neutral}></Stat>
					<Stat text={"Bad"} amount={bad}></Stat>
					<Stat text={"All"} amount={good + neutral + bad}></Stat>
					<Stat text={"Average"} amount={(good - bad) / (good + neutral + bad)}></Stat>
					<Stat text={"Positive"} amount={(good / (good + neutral + bad)) * 100}></Stat>

				</tbody>

			</table>
		</div>

	)

}

const App = () => {
	// guarda los clics de cada botón en su propio estado
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)
	const handler = (reviewType) => {
		switch (reviewType) {
			case 1:
				return () => setGood(good + 1);
				break;
			case 2:
				return () => setNeutral(neutral + 1);
				break;
			case 3:
				return () => setBad(bad + 1);
				break;
			default:
				break;
		}
	}
	return (
	<div>
		<h1>Give feedback</h1>
		<Button onClick={handler(1)} text={"Good"}></Button>
		<Button onClick={handler(2)} text={"Neutral"}></Button>
		<Button onClick={handler(3)} text={"Bad"}></Button>
		<Statistics good={good} neutral={neutral} bad={bad}></Statistics>


	</div>
	)
}

export default App
