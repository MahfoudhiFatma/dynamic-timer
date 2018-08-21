import React from 'react'


const msToTime = ms =>{
    const secondsInMs =1000
    const minutesInMs= secondsInMs*60
    const hoursInMs = minutesInMs*60

    const hours=Math.floor(ms/hoursInMs)
    const minutes=Math.floor((ms%hoursInMs)/minutesInMs)
    const seconds=Math.floor((ms%minutesInMs)/secondsInMs)
    return{hours,minutes,seconds}

}

const Time=(props)=>{
    console.log(props.ms)
    return(
    <div className="timer-content">
            <div className="timer-div">
                <h1>{String(msToTime(props.ms).hours).padStart(2,'0')}:</h1>
                <p>Hour</p>
            </div>
            <div className="timer-div">
                <h1>{String(msToTime(props.ms).minutes).padStart(2,'0')}:</h1>
                <p>Minute</p>
            </div>
            <div className="timer-div">
                <h1>{String(msToTime(props.ms).seconds).padStart(2,'0')}</h1>
                <p>Second</p>
            </div>
        </div>
    )
}
export default Time