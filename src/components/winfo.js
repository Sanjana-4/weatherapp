import React,{useState,useEffect} from 'react'
import { useHistory,useLocation } from 'react-router-dom'
import './ApiData.css';
const Winfo = () => {




    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }
    
    const location = useLocation();

    useEffect(() => {
      console.log(location.pathname); 
      console.log(location.data); 
    }, [location]);


   /* const APIKEY = "ea97e52c3dd933f4e06a02012713596a";
    const [data,setData]=useState([]);
    const weatherdata = ()=>{
        fetch (`http://api.openweathermap.org/data/2.5/weather?q=${location.state}&appid=${APIKEY}`)
        .then((response)=> response.json())
        .then((json)=>{
            console.log(json);
            setData(json);
        })
    }
    useEffect(() => {
        weatherdata()
    }, []) */

    return (
        <div className="img">
        
        <button className="btn" onClick={goToPreviousPath}>Go back</button>
        <div>
      <div>

    <div className="name">{location.data.name},{location.data.sys&&location.data.sys.country}</div>

    
       <div className="temp">{Math.floor(location.data.main&&location.data.main.temp - 273.15)}</div>
       <div className="temp_symbol">°C</div>
       <div className="moreinfo1">
         <div className="description">{location.data.weather&&location.data.weather[0].description} 🔆 </div>
         <br/>
         <div className="feelslike">Feels Like {Math.floor(location.data.main&&location.data.main.feels_like - 273.15)}°</div>
         <div className="pressure">pressure {location.data.main&&location.data.main.pressure} hPa</div>
         <div className="humidity">Humidity {location.data.main&&location.data.main.humidity}%</div>
      </div>
      <div className="moreinfo2">
      <div className="description">{new Date(location.data.dt * 1000).toLocaleTimeString()}  </div>
         <br/>
         <div className="wind">wind ➤ {Math.floor((location.data.wind&&location.data.wind.speed * 18) / 5)} km/hr</div>
         <div className="visibility">visibility {location.data.visibility / 1000} Km</div>
         <div className="degree">Wind Direction {location.data.wind&&location.data.wind.deg}°</div>
      </div>
      <br/>
      <div className="dailyweather">More Information</div>
      
      <div>
          <div className="card">Max-Temp
          <div className="symbol">🌣</div>
          <div className="size">
          <div>{Math.floor(location.data.main&&location.data.main.temp_max - 273.15)}</div>
          </div>
          </div>
          
          <div className="card">Min-Temp
          <div className="symbol">☼</div>
          <div className="size">
          <div>{Math.floor(location.data.main&&location.data.main.temp_min - 273.15)}</div>
          </div>
          </div>
          <div className="card">Sunrise
          <div className="symbol">🌤</div>
          <div className="size">
          <div>{new Date(location.data.sys&&location.data.sys.sunrise * 1000).toLocaleTimeString()}</div>
          </div>
          </div>
          <div className="card">Sunset
          <div className="symbol">🌥</div>
          <div className="size">
          <div>{new Date(location.data.sys&&location.data.sys.sunset * 1000).toLocaleTimeString()}</div>
          </div>
          </div>
        </div>
       
        </div> 
       
      </div>
       
        </div>
    )
}

export default Winfo
