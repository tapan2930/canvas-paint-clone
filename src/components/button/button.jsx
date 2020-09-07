import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Button extends React.Component {

  setOnClickCallBack = ()=>{
    return this.props.onclick(this.props.title)
 
  }
  render() {
    return (
        <button title={this.props.title}> <FontAwesomeIcon icon={this.props.icon} onClick={ e=> this.setOnClickCallBack()}/>{this.props.text}</button>
    )
  }
}

export default Button;
