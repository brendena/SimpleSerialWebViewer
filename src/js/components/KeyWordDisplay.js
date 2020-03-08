import React from 'react';
import  store  from "../store/index"

import { connect } from 'react-redux';



class KeyWordDisplay extends React.Component{
  constructor(props){
    super(props);
  }
  handleChangeColor(){

  }
  render (){
    return(
      <div className="displayKeyWords">
        
        <input type="color" id="Highlight" name="Highlight" className="colorSelector"
                      value={this.props.color} onChange={this.handleChangeColor}></input>


        {this.props.keyword}  
      
        
      </div>);
  };
}

export default KeyWordDisplay;