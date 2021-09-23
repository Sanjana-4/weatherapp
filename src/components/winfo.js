import React from 'react'
import { useHistory } from 'react-router-dom'

const Winfo = () => {
    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }
    return (
        <div>
        <button onClick={goToPreviousPath}>Go back</button>
        </div>
    )
}

export default Winfo
