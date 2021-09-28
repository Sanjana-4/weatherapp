import React,{useState,useEffect} from 'react'
import { useLocation } from "react-router-dom";
function ApiData() {

    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); 
       console.log(location.state); 
    }, [location]);


    const API_key = "405b769039cf1b61415b5a86c87bf5b0";
    const [data,setData]=useState([]);
    
        fetch (` http://api.openweathermap.org/data/2.5/weather?q=${location.state}&appid=${API_key}`)
        .then((response)=> response.json())
        .then((json)=>{
            console.log(json);
            setData(json);
        })
    
    return (
        <div>
        <center>
        
        <pre>{JSON.stringify(data, null, 2)}</pre> 
        </center>
            
        </div>
    )
}

export default ApiData
