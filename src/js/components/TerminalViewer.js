import React from 'react';
import  store  from "../store/index"

import * as Actions from '../actions/index'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faBolt, faTimes } from "@fortawesome/free-solid-svg-icons";

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
    this.clearLogs = this.clearLogs.bind(this);
  }
  clearLogs(){
    console.log("clearLogs")
    store.dispatch(Actions.actionClearLog(this.props.uartDevice.uartName));
  }

  pauseLogs(){
    console.log("pauseLogs")
    console.log("going to need a middle working for this")
    //store.dispatch(Actions.actionClearLog(this.props.uartDevice.uartName));
  }


  render (){
    return(
        <div class="terminalViewer">
          <h1>{this.props.uartDevice.uartName} - {this.props.uartDevice.baudRate}
              <FontAwesomeIcon icon={faPause} onClick={this.pauseLogs} />

              <FontAwesomeIcon icon={faBolt}  onClick={this.clearLogs}/>
              <FontAwesomeIcon icon={faTimes}/>
          </h1>
          <div>
            {this.props.logs[this.props.uartDevice.uartName].map((value, index) => {
                return <LineData key={index} data={value} > </LineData> 
            })}
          </div>
        </div>);
  };
}

export default TerminalViewer;