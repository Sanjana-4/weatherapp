import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import './Weather.css'
import Winfo from './Winfo';




function Weather() {
      

    const history = useHistory();
    function handleHistory (props) {
        
        var err = document.getElementById('city').value;
        history.push({
            
            pathname: '/Winfo',
            state: err
            
        });
        
        
    }
    
   
    
    
    return (
    
        <div className="weather">
            <center>
            <form className="form"    >
                   <h2>Weather Forecast 🌧   </h2>
                 <select id="city"  className="weath_dropdown">
                 <option hidden value="Select city">Select City</option>
                <option value ="Chennai">Chennai</option>
                <option value ="mumbai">Mumbai</option>
                <option  value="pune">Pune</option>
                <option value ="delhi">Delhi</option>
                <option value ="bangalore">Bangalore</option>
                <option  value ="others">Others</option>
                </select>
                <br/>
                <button className="button" onClick={()=>{
                    var err = document.getElementById('city').value;
                     if(err === "Select city"){
                      alert("Select Valid City");
            
                }else if(err==="pune"){alert("Select Valid City");}
                else{handleHistory()}}}>Get Weather</button>
                     
                </form>
            </center>
            <div>
            
           
            </div>
        </div>

    )
}
export default Weather