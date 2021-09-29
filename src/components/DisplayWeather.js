import React from 'react'
import './ApiData.css'

function DisplayWeather(props) {
    const { data } = props;

    return (
        <div>
             <div>

<div>
{data.cod !== 404 ? (
    <React.Fragment>
    <div className="name">{data.name},{data.sys&&data.sys.country}</div>

    
       <div className="temp">{Math.floor(data.main&&data.main.temp - 273.15)}</div>
       <div className="temp_symbol">°C</div>
       <div className="moreinfo1">
         <div className="description">{data.weather&&data.weather[0].description} 🔆 </div>
         <br/>
         <div className="feelslike">Feels Like {Math.floor(data.main&&data.main.feels_like - 273.15)}°</div>
         <div className="pressure">pressure {data.main&&data.main.pressure} hPa</div>
         <div className="humidity">Humidity {data.main&&data.main.humidity}%</div>
      </div>
      <div className="moreinfo2">
      <div className="description">{new Date(data.dt * 1000).toLocaleTimeString()}  </div>
         <br/>
         <div className="wind">wind ➤ {Math.floor((data.wind&&data.wind.speed * 18) / 5)} km/hr</div>
         <div className="visibility">visibility {data.visibility / 1000} Km</div>
         <div className="degree">Wind Direction {data.wind&&data.wind.deg}°</div>
      </div>
      <br/>
      <div className="dailyweather">More Information</div>
      
      <div>
          <div className="card">Max-Temp
          <div className="symbol">🌣</div>
          <div className="size">
          <div>{Math.floor(data.main&&data.main.temp_max - 273.15)}</div>
          </div>
          </div>
          
          <div className="card">Min-Temp
          <div className="symbol">☼</div>
          <div className="size">
          <div>{Math.floor(data.main&&data.main.temp_min - 273.15)}</div>
          </div>
          </div>
          <div className="card">Sunrise
          <div className="symbol">🌤</div>
          <div className="size">
          <div>{new Date(data.sys&&data.sys.sunrise * 1000).toLocaleTimeString()}</div>
          </div>
          </div>
          <div className="card">Sunset
          <div className="symbol">🌥</div>
          <div className="size">
          <div>{new Date(data.sys&&data.sys.sunset * 1000).toLocaleTimeString()}</div>
          </div>
          </div>
        </div>
        </React.Fragment>
        ) : (
<div className="maincard">
  <h2>{data.message}</h2>
</div>
)}
        </div> 
       
</div>
        </div>
    )
}

export default DisplayWeather
