import { useState } from 'react'
export default function CodeDamnDays() {
	const [selectedDate, setSelectedDate] = useState({
		value: '',
		valueAsDate: new Date()
	})
	const [days, setDays] = useState(0)
	const [error, setError] = useState<boolean|string>(false)
	return (
		<>
			<input type="date" id="datePicker"
				value={selectedDate.value}
				onChange={ e => {
					setSelectedDate({
						value: e.target.value,
						valueAsDate: e.target.valueAsDate!
					})
				}} 
			/>
			<button id="findDays" onClick={() => {
				if(Date.now() > selectedDate.valueAsDate.getTime()) {
					setError("Cant be past date")
					return
				} else {
					setDays(parseFloat((selectedDate.valueAsDate.getTime()-Date.now())/86400000).toFixed(0))
					setError(false)
				}
			}}>Find Days</button>
			{error && <div id="error">{error}</div>}
			{!error &&<span id="daysLeft">{days}</span>}
		</>
	);
}