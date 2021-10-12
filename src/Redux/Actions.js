import { GET_WEATHER } from "./Constants";
import axios from "axios";
import { BASE_URL } from "../components/ApiConstants";

export const GetWeatherDetails = (location = "") => async dispatch => {
    dispatch({ type: GET_WEATHER.PENDING });
    axios
      .get(BASE_URL, {
        params: {
          q: location,
          units: "Metric",
          lang: "en"
        }
      })
      .then(response =>
        dispatch({ type: GET_WEATHER.SUCCESS, payload: response.data })
      )
  

   
};