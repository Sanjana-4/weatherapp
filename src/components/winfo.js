import React from 'react'
import { useHistory } from 'react-router-dom'
import './Weather.css'
import ApiData from './ApiData';
const Winfo = () => {




    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }
    

    return (
        <div>
        <ApiData/>
        <button onClick={goToPreviousPath}>Go back</button>
        
        </div>
    )
}

export default Winfo
