import React, { Component } from 'react'
import cat from './cat.jpg'

export default class State extends Component {
    state={
fullName:"Chaima Sassi",
 bio:"Student",
 profession:"Nothing",
 timer:0 ,
 show: false
    }
    handle =()=>{
        if (this.state.show==false) {
             return  this.setState({show:true}) }
        else
           return  this.setState({show:false})
        }
    handletime=()=>{
            this.setState({time : this.state.time +1 })
            return this.state.time
          }
          componentDidMount(){
            var timer = setInterval(this.handletime , 100)
            return this.setState({time : timer})
          }
     
  render() {
      console.log(this.state.show)
    return (
      <div>
      <button onClick={this.handle}>
             click me

      </button>

     { 
      (this.state.show) ? <div><img src={cat} className="image" /> <br/> <h1>My name is : {this.state.fullName} </h1> <br/> <h2> I'm a : {this.state.bio} </h2> <br/> <h3> And i do : {this.state.profession} for now </h3></div> : <p></p>
      
     }
     <p1>{this.state.time}</p1>


      </div>
    )
  }
}
