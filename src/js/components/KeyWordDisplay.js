import React from 'react';
import  store  from "../store/index"

import { connect } from 'react-redux';



class KeyWordDisplay extends React.Component{
  constructor(props){
    super(props);
  }
  render (){
    return(
        <div>{this.props.keyword} color - {this.props.color} </div>);
  };
}

export default KeyWordDisplay;