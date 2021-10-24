import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { GetWeatherDetails } from "../Redux/Actions";
import './ApiData.css';

class Winfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  componentWillReceiveProps= () =>{
    GetWeatherDetails();
  }

  handleChange = e => {
    e.preventDefault();
    this.props.history.push({
        pathname: '/',
        
      })
}

  render() {

    const { data, success} = this.props.weatherData;
    const { weather, sys, name, main, dt, wind, visibility } = data;


    return (
<div className="img">
        
        <button className="btn" onClick={(e)=>this.handleChange(e)}>Go back</button>
        <div>
      <div>

    <div className="name">{name},{success ? sys.country : null}</div>

    
       <div className="temp">{Math.floor(success ? main.temp : null )}°C</div>
       <div className="description">{success ? weather[0].description : null} 🔆 </div>
         <br/>
         <div className="moreinfo1">
         <div className="feelslike">Feels Like {Math.floor(success ? main.feels_like : null )}°</div>
         <div className="pressure">pressure {success ? main.pressure : null} hPa</div>
         <div className="humidity">Humidity {success ? main.humidity : null}%</div>
      </div>
      <div className="description1">{success ? new Date (dt * 1000).toLocaleTimeString() : null }  </div>
         <br/>
         <div className="moreinfo2">
         <div className="wind">wind ➤ {success ? Math.floor((wind.speed * 18) / 5) : null } km/hr</div>
         <div className="visibility">visibility {success ? visibility / 1000  : null} Km</div>
         <div className="degree">Wind Direction {success ? wind.deg : null}°</div>
    </div>
      <br/>
      <div className="dailyweather">More Information</div>
      
      <div>
          <div className="card">Max-Temp
          <div className="symbol">🌣</div>
          <div className="size">
          <div>{Math.floor(success ? main.temp_max : null )}</div>
          </div>
          </div>
          
          <div className="card">Min-Temp
          <div className="symbol">☼</div>
          <div className="size">
          <div>{Math.floor(success ? main.temp_min : null )}</div>
          </div>
          </div>
          <div className="card">Sunrise
          <div className="symbol">🌤</div>
          <div className="size">
          <div>{success ? new Date(sys.sunrise * 1000).toLocaleTimeString() : null }</div>
          </div>
          </div>
          <div className="card">Sunset
          <div className="symbol">🌥</div>
          <div className="size">
          <div>{success ? new Date(sys.sunset * 1000).toLocaleTimeString() : null }</div>
          </div>
          </div>
        </div>
       
        </div> 
       
      </div>
       
        </div>
    );
  }
}


const mapStateToProps = state => ({
  weatherData: state
});
const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ GetWeatherDetails }, dispatch)
});


export default connect(mapStateToProps,mapDispatchToProps)(Winfo);