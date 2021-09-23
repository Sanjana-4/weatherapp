import React from 'react'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'


function Weather() {
    const history = useHistory();
    const handleHistory = () => {
        history.push("/Winfo");
    }
    return (
    
        <div>
            <center>
                <div className="weather">
                <h2 claasName="weather-title">Weather App</h2>
                <select>
                <option value ="Chennai">Chennai</option>
                <option value ="mumbai">Mumbai</option>
                <option selected value="pune">Pune</option>
                <option value ="delhi">Delhi</option>
                </select>
                <button onClick={handleHistory}>Get Weather</button>

                </div>
            </center>
        </div>

    )
}
export default Weather