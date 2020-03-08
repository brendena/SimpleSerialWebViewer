import React from 'react';
import  store  from "../store/index"
import * as constTypes from "../constants/constsTypes"
import TerminalHeader from "./TerminalHeader"

import { List, AutoSizer, CellMeasurer } from "react-virtualized";
import * as Actions from '../actions/index'

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

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow({ index, key, style }) {
    return (
      <div key={key} style={style} className="row">
        <LineData data={this.props.logs["uart1"][index]}  > </LineData> 
      </div>
      
    );
  }

  render (){
    return(
        <div class="terminalViewer">
          <TerminalHeader uartDevice={this.props.uartDevice} />
          <div class="lineDataContainer">
          
          <AutoSizer>
          {
            ({ width, height }) => {
            return <List
            width={width}
            height={height}
            rowHeight={30}
            rowRenderer={this.renderRow}
            rowCount={this.props.logs["uart1"].length} 
            overscanRowCount={3} />
            }
          }
          </AutoSizer>

          </div>
        </div>);
  };
}
/*
<AutoSizer>
{
  ({ width, height }) => {
  return <List
  width={width}
  height={height}
  rowHeight={30}
  rowRenderer={this.renderRow}
  rowCount={this.props.logs["uart1"].length} 
  overscanRowCount={3} />
  }
}
</AutoSizer>

<List
width={800}
height={600}
rowHeight={30}
rowRenderer={this.renderRow}
rowCount={this.props.logs["uart1"].length} />


<div>
  {this.props.logs[this.props.uartDevice.uartName].map((value, index) => {
      return <LineData key={index} data={value} > </LineData> 
  })}
</div>


          <div>{this.props.logs["uart1"][index].name}</div>
          <div>{this.props.logs["uart1"][index].text}</div>
*/
export default TerminalViewer;