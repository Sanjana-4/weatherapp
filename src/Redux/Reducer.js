import { GET_WEATHER } from "./Constants";
const WeatherInitialState = {
  pending: false,
  success: false,
  data: {}
};

export const WeatherReducer = (state = WeatherInitialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_WEATHER.PENDING:
      return {
        ...state,
       loading: false
      };
    case GET_WEATHER.SUCCESS:
     // console.log(JSON.stringify(action.payload))

      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload
      };
      case GET_WEATHER.FAILURE:
        return {
          ...state,
          error: true
        };
      default:
        return state;
    }
   
  
};
export default (WeatherReducer)