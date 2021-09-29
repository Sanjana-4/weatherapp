import React,{useState,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import DisplayWeather from './DisplayWeather';
import './ApiData.css'
function ApiData() {

    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); 
       console.log(location.state); 
    }, [location]);


    const APIKEY = "ea97e52c3dd933f4e06a02012713596a";
    const [data,setData]=useState([]);
    
        fetch (`http://api.openweathermap.org/data/2.5/weather?q=${location.state}&appid=${APIKEY}`)
        .then((response)=> response.json())
        .then((json)=>{
            console.log(json);
            setData(json);
        })
   
    return (
      <div>
          
      {data.data !== undefined ? (
        <div>
          <DisplayWeather data={data.data} />
        </div>
      ) : <div className="error_card">
      <center>
          <div className="error">404</div>
          <div className="error_msg">Ooops!!! Somthing Went Wrong. Please Try Again Later</div></center>
      </div>}
      
      </div>
       
    )
}

export default ApiData
