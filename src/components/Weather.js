import React from 'react'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import './Weather.css'


function Weather() {
    const history = useHistory();
    const handleHistory = () => {
        history.push("/Winfo");
    }
    return (
                <div className="weather">
                    <center>
                 <form className="form">
                   <h2>Weather Forecast 🌧   </h2>
                 <select className="weath_dropdown">
                <option value ="Chennai">Chennai</option>
                <option value ="mumbai">Mumbai</option>
                <option selected value="pune">Pune</option>
                <option value ="delhi">Delhi</option>
                <option value ="bangalore">Bangalore</option>
                </select>
                
                <button className="button" onClick={handleHistory}>Get Weather</button>
                </form>
                </center>
                </div>
    


    )
}
export default Weather