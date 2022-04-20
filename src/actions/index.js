export const LOAD_WEATHER = 'LOAD_WEATHER'

export const loadWeather = (zip) => {
	return async (dispatch) => {
		const apikey = '467355df4c808dd6134a3b64e9ace282'
		const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=imperial`
		const res = await fetch(path)
		const json = await res.json()
		const { cod, message } = json
		if (cod !== 200) {
			dispatch({
				type: LOAD_WEATHER,
				payload: { cod, message }
			})
			return 
		}

		const { temp } = json.main
		// console.log(json)
		dispatch({
			type: LOAD_WEATHER,
			payload: { cod, temp }
		})
	}
}