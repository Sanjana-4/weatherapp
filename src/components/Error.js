import React from 'react'
import './ApiData.css'
import { useHistory } from 'react-router-dom'
function Error() {

    const history = useHistory();
    const handleHistory = (e) => {
        e.preventDefault();
        history.push({
            
            pathname: '/',
            
            
        });
    }

    return (
        <div className="img">
        <center className="error">
            <h1>Page Not Found</h1>
            <h2>Please Try Later</h2>
            <button className="error_btn" onClick={handleHistory} >Go Back</button>
            </center>
        </div>
    )
}

export default Error
