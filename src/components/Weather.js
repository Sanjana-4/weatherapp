import React,{useState,useEffect} from 'react'
import { useHistory , useLocation} from 'react-router-dom'
import './Weather.css'
import Winfo from './Winfo';
import Model from './Model'



function Weather() {
      
    
    const history = useHistory();
    function handleHistory () {
      
        var err = document.getElementById('city').value;
       
        history.push({
            
            pathname: '/Winfo',
            state: err,
            data: data
            
        });
        
        
    }
    


    const APIKEY = "ea97e52c3dd933f4e06a02012713596a";
    const [data,setData]=useState([]);
    const city = useState(('city').value)
    const weatherdata = (e)=>{
        e.preventDefault()
        var err = document.getElementById('city').value;
        fetch (`http://api.openweathermap.org/data/2.5/weather?q=${err}&appid=${APIKEY}`)
        .then((response)=> response.json())
        .then((json)=>{
          
            console.log(json);
            setData(json);
         })
    }
    const result=()=>{
        
           if(data.cod ===200){handleHistory()}
       else{
           alert("something went wrong")
       }    
    }
 
   
    
    
    return (
    
        <div className="weather">
            <center>
            <form  className="form" onSubmit={(e)=>weatherdata(e)}   >
                   <h2>Weather Forecast 🌧   </h2>
                 <select id="city" className="weath_dropdown" onChange={e=>(e.target.value)} >
                 <option hidden value = "Select City">Select City</option>
                <option value="chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                </select>
                <br/>
                <button className="button" type="form" onClick={(e)=>{
                    var err = document.getElementById('city').value;
                   if(err === "Select City"){
                    alert ("Select city");
                    
                }
                else{result()}
                 }}>Get Weather</button>
                     
                </form>
            </center>
            <div>
            
           
            </div>
        </div>

    )
}
export default Weather