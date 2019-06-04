import React,{Component} from "react";

class Greeter extends Component{
  constructor(props){
    super(props);
    this.state = {word:"Hello world"}
  }
  render(){
    const state = this.state;
    return (
      <h1 className="title">
        {state.word}
      </h1>
    )
  }
}

export default Greeter;