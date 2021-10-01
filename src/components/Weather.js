import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import './Weather.css'





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
   
 
   
    
    
    return (
    
        <div className="weather">
            <center>
            <form  className="form" onSubmit={(e)=>weatherdata(e)}   >
                   <h2>Weather Forecast 🌧   </h2>
                 <select id="city" className="weath_dropdown" onChange={(e)=>weatherdata(e)} value={('city').value} >
                 <option hidden value = "Select City">Select City</option>
                <option value="chennai">Chennai</option>
                <option value="Mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                </select>
                <br/>
                <button className="button" onClick={(e)=>{
                    var err = document.getElementById('city').value;
                   if(err === "Select City"){
                    alert ("Select city");
                    
                    
                }
                else if(data.cod !== 200){
                    alert("something went wrong")
                }
                else{handleHistory(e)}
                 }}>Get Weather</button>
                     
                </form>
            </center>
            <div>
            
           
            </div>
        </div>

    )
}
export default Weather