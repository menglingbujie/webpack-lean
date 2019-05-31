import React,{Component} from "react";

class Greeter extends Component{
  constructor(props){
    super(props);

    this.state = {word:"Hello world"}
  }
  render(){
    return (
      <h1>
        {state.word}
      </h1>
    )
  }
}

export default Greeter;