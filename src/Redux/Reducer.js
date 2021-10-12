import { GET_WEATHER } from "./Constants";
const WeatherInitialState = {
  loading: false,
  success: false,
  data: {}
};

export const WeatherReducer = (state = WeatherInitialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_WEATHER.PENDING:
      return {
        ...state,
       loading: true
      };
    case GET_WEATHER.SUCCESS:
     // console.log(JSON.stringify(action.payload))

      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload
      };
      
    default:
      return state;
  }
  
};