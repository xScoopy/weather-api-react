import { useSelector } from 'react-redux'

function DisplayTemp() {
	const weather = useSelector(state => state.weather)
	
	if (weather === null) {
		return null
	}

	console.log(weather)

	return (
		<h1>{weather.temp}</h1>
	)
}

export default DisplayTemp