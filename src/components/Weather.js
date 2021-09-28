import React from 'react'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import './Weather.css'


function Weather() {
    
    const history = useHistory();
    const handleHistory = () => {
        history.push("/Winfo");
    }
    function Validate(){
         var err = document.getElementById('city').value;
         if(err == "others"){
             alert("Select Valid City");
             return false;
         }
         return true;
    }
    
    return (
                <div className="weather">
                    <center>
        
                 <form className="form"  onSubmit={Validate}  >
                   <h2>Weather Forecast 🌧   </h2>
                 <select id="city"  className="weath_dropdown">
                 <option  hidden selected>Select City</option>
                <option value ="Chennai">Chennai</option>
                <option value ="mumbai">Mumbai</option>
                <option  value="pune">Pune</option>
                <option value ="delhi">Delhi</option>
                <option value ="bangalore">Bangalore</option>
                <option value ="others">Others</option>
                </select>
                <br/>
                <button className="button" onClick={Validate}>Get Weather</button>
                     
                </form>
            
    
               
                </center>
    
                </div>
    


    )
}
export default Weather