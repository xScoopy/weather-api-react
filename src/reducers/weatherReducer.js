import { LOAD_WEATHER } from '../actions'

const weatherReducer = (state = null, action) => {
	switch(action.type) {
		case LOAD_WEATHER:
			return action.payload
		default: 
			return state
	}
}

export default weatherReducer