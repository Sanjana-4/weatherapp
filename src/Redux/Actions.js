import { GET_WEATHER } from "./Constants";
import axios from "axios";
import { BASE_URL } from "../components/ApiConstants";


async function GetWeather(location="") {
  var responsev = {};
  console.log("i am here")
  await axios
  .get(BASE_URL, {
    params: {
      q: location,
      units: "Metric",
      lang: "en"
    }
  })
  .then((response) =>{
    console.log(response);
    responsev = response
  });
  return responsev;
}

const GetWeatherDetails = (location="") => async dispatch => {
    console.log(location);
    //dispatch({ type: GET_WEATHER.PENDING });
    console.log("making Request")
    axios
      .get(BASE_URL, {
        params: {
          q: location,
          units: "Metric",
          lang: "en"
        }
      })
      .then(response => {
        console.log(response)
        if(response.data != null){
          dispatch({ type: GET_WEATHER.SUCCESS, payload: response.data });
          return response
        }
        }
      )
      console.log("done")
      return {}
      
};

export {GetWeatherDetails,GetWeather};