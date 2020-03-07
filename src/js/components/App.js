import React from 'react';
import './App.css';
import * as Actions from '../actions/index'
import  store  from "../store/index"
import AddSerial from "./AddSerial"
import StyleNavBar from "./StyleNavBar"

import { connect } from 'react-redux';
import TerminalViewer from "./TerminalViewer"

@connect((store)=>{
  return{
    uartDevices: store.propsPage.uartDevices

  }
})
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        title:""
    }
  }

  render (){
    return(
     <div id="App" >
        <AddSerial/>
        <StyleNavBar/>
        <div id="serialOutputContainer">
          {this.props.uartDevices.map((value, index) => {
              return <TerminalViewer key={index} uartDevice={value} > </TerminalViewer> 
          })}
        </div>
    </div>);
  };
}

export default App;