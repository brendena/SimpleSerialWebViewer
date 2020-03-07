import React from 'react';
import  store  from "../store/index"

import { connect } from 'react-redux';
import LineData from "./LineData";


@connect((store)=>{
  return{
    logs: store.propsPage.logs
  }
})
class TerminalViewer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render (){
    return(
        <div class="terminalViewer">
          <h1>{this.props.uartDevice.uartName} - {this.props.uartDevice.baudRate}</h1>
          <div>
            {this.props.logs[this.props.uartDevice.uartName].map((value, index) => {
                return <LineData key={index} data={value} > </LineData> 
            })}
          </div>
        </div>);
  };
}

export default TerminalViewer;