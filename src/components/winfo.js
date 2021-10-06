import React,{useState,useEffect} from 'react'
import { useHistory,useLocation } from 'react-router-dom'
import './ApiData.css';
import { connect } from "react-redux";
class Winfo extends React.Component {




  //  let history = useHistory();
  //   const goToPreviousPath = () => {
  //       history.goBack()
  //   }
    
  //   const location = useLocation();

  //   useEffect(() => {
  //     console.log(location.pathname); 
  //     console.log(location.data); 
  //   }, [location]);


  //   const APIKEY = "ea97e52c3dd933f4e06a02012713596a";
  //   const [data,setData]=useState([]);
  //   const weatherdata = ()=>{
  //       fetch (`http://api.openweathermap.org/data/2.5/weather?q=${location.state}&appid=${APIKEY}`)
  //       .then((response)=> response.json())
  //       .then((json)=>{
  //           console.log(json);
  //           setData(json);
  //       })
  //   }
  //   useEffect(() => {
  //       weatherdata()
  //   }, []) 

    handleChange = e => {
      e.preventDefault();
      this.props.history.push({
          pathname: '/',
          
        })
  }
   
    render() {
    
    const { data } = this.props.weatherData;
    const { weather, sys, name, main, dt, wind, visibility } = data;

    return (
        <div className="img">
        
        <button className="btn" onClick={(e)=>this.handleChange(e)}>Go back</button>
        <div>
      <div>

    <div className="name">{name},{sys.country}</div>

    
       <div className="temp">{Math.floor(main.temp )}</div>
       <div className="temp_symbol">°C</div>
       <div className="moreinfo1">
         <div className="description">{weather[0].description} 🔆 </div>
         <br/>
         <div className="feelslike">Feels Like {Math.floor(main.feels_like )}°</div>
         <div className="pressure">pressure {main.pressure} hPa</div>
         <div className="humidity">Humidity {main.humidity}%</div>
      </div>
      <div className="moreinfo2">
      <div className="description">{new Date(dt * 1000).toLocaleTimeString()}  </div>
         <br/>
         <div className="wind">wind ➤ {Math.floor((wind.speed * 18) / 5)} km/hr</div>
         <div className="visibility">visibility {visibility / 1000} Km</div>
         <div className="degree">Wind Direction {wind.deg}°</div>
      </div>
      <br/>
      <div className="dailyweather">More Information</div>
      
      <div>
          <div className="card">Max-Temp
          <div className="symbol">🌣</div>
          <div className="size">
          <div>{Math.floor(main.temp_max )}</div>
          </div>
          </div>
          
          <div className="card">Min-Temp
          <div className="symbol">☼</div>
          <div className="size">
          <div>{Math.floor(main.temp_min )}</div>
          </div>
          </div>
          <div className="card">Sunrise
          <div className="symbol">🌤</div>
          <div className="size">
          <div>{new Date(sys.sunrise * 1000).toLocaleTimeString()}</div>
          </div>
          </div>
          <div className="card">Sunset
          <div className="symbol">🌥</div>
          <div className="size">
          <div>{new Date(sys.sunset * 1000).toLocaleTimeString()}</div>
          </div>
          </div>
        </div>
       
        </div> 
       
      </div>
       
        </div>
    )
    }
}
const mapStateToProps = state => ({
  weatherData: state
});
export default connect(mapStateToProps)(Winfo);
