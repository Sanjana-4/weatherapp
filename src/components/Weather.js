import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import './Weather.css'





function Weather() {
      

    const history = useHistory();
    const handleHistory = (e) => {
        e.preventDefault();
        history.push({
            
            pathname: '/Winfo',
            state: city
            
        });
        
        
    }
    const [city,setCity]=useState();


   
    
    
    return (
    
        <div className="weather">
            <center>
            <form className="form">
                   <h2>Weather Forecast 🌧   </h2>
                 <select className="weath_dropdown" onChange={e=>setCity(e.target.value)} value={city}>
                 
                <option>Chennai</option>
                <option>Mumbai</option>
                <option>Pune</option>
                <option>Delhi</option>
                <option>Bangalore</option>
                </select>
                <br/>
                
                <button className="button" onClick={handleHistory} >Get Weather</button>
                
                </form>
            </center>
            <div>
            
           
            </div>
        </div>

    )
}
export default Weather