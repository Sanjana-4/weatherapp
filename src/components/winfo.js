import React from 'react'
import { useHistory } from 'react-router-dom'
import './ApiData.css';
import ApiData from './ApiData';
const Winfo = () => {




    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }
    

    return (
        <div className="img">
        
        <button className="btn" onClick={goToPreviousPath}>Go back</button>
        <ApiData/>
        </div>
    )
}

export default Winfo
