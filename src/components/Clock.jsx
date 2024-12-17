import React, { useState } from 'react'
import '../pages/styles.css'

const Clock = () => {
    let time  = new Date().toLocaleDateString();
    const [currectTime, setCurrentTime] = useState(time);
    const updateTime = () =>{
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);
    return (
        <div className='clock'>
            <h1>
                {currectTime}
            </h1>
        </div>
    )
}

export default Clock;