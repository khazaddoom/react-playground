import {useState} from 'react'
export default function App() {
	const [totalCost, setTotal] = useState(0) 
	const [numberOfIntervals, setIntervals] = useState(1) 
	const [emi, setEmi] = useState('') 
	return (
		<>
			<div className="container flex flex-column m-1">
				<input type="number" id="totalCost" className="m-1" value={totalCost} onChange={e => setTotal(parseFloat(e.target.value))}/>
				<input type="number" id="numberOfIntervals" className="m-1" value={numberOfIntervals} onChange={e => setIntervals(parseFloat(e.target.value))}/>
			</div>
			<button id="calculate" className="p-2 bg-green-200 hover:bg-green-400 rounded" onClick={() => {
				setEmi(`${parseFloat(`${totalCost/numberOfIntervals}`).toFixed(2)}`)	
			}}>Calculate</button>
			<div id="output">{emi}</div>
		</>
	);
}