import React from 'react'
import Time from './Time'

class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            ms:0
        }
        
    setInterval(
        () =>{
        this.setState({
            ms:this.state.ms +1000
        })}
        ,1000)
   
    }
   
    render(){
        return (
        <Time ms={this.state.ms}/>
        )
    }
}

export default Timer