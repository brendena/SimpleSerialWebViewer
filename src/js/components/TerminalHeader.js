import React from 'react';
import  store  from "../store/index"
import * as constTypes from "../constants/constsTypes"

import * as Actions from '../actions/index'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faBolt, faTimes } from "@fortawesome/free-solid-svg-icons";

import { connect } from 'react-redux';
import LineData from "./LineData";


@connect((store)=>{
  return{
    uartDeviceState: store.propsPage.uartDeviceState["uart1"]
  }
})
class TerminalViewer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
    this.clearLogs = this.clearLogs.bind(this);
    this.pauseLogs = this.pauseLogs.bind(this);
    this.continueLogs = this.continueLogs.bind(this);
  }
  clearLogs(){
    store.dispatch(Actions.actionClearLog(this.props.uartDevice.uartName));
  }

  pauseLogs(){
    store.dispatch(Actions.changeUartDeviceState({"uartDevice":this.props.uartDevice.uartName, "state":constTypes.StateUARTDevice.paused}));
  }
  continueLogs(){
    store.dispatch(Actions.changeUartDeviceState({"uartDevice":this.props.uartDevice.uartName, "state":constTypes.StateUARTDevice.running}));
  }


  render (){
    return(
          <h1>{this.props.uartDevice.uartName} - {this.props.uartDevice.baudRate}
              
                {(() => {
                    if(this.props.uartDeviceState != constTypes.StateUARTDevice.paused){
                        return <FontAwesomeIcon icon={faPause} onClick={this.pauseLogs} />
                    }
                    else{
                        return <FontAwesomeIcon icon={faPlay} onClick={this.continueLogs} />
                    }
                })()}
              <FontAwesomeIcon icon={faBolt}  onClick={this.clearLogs}/>
              <FontAwesomeIcon icon={faTimes}/>
          </h1>);
  };
}

export default TerminalViewer;