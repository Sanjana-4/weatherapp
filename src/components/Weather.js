import React from 'react'
import { useHistory } from 'react-router-dom'

function Weather() {
    const history = useHistory();
    const handleRoute = () => {
        history.push('/winfo');
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
                <button onClick={handleRoute}>Get Weather</button>

                </div>
            </center>
        </div>
    )
}
export default Weather