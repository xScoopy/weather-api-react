import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loadWeather } from './actions'

function LoadWeather() {
	const [zip, setZip] = useState('')
  const dispatch = useDispatch()

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				dispatch(loadWeather(zip))
			}}
		>
			<input 
				value={zip}
				onChange={(e) => setZip(e.target.value)}
			/>
			<button>Submit</button>
		</form>
	)
}

export default LoadWeather