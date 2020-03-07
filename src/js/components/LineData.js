import React from 'react';
import  store  from "../store/index"
import Highlighter from "react-highlight-words";

import { connect } from 'react-redux';

@connect((store)=>{
    return{
        keyWords: store.propsPage.keyWords
    }
})
class LineData extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render (){
    var foundColor = "#000000";
    var foundWord = "";
    for(var i =0; i < this.props.keyWords.length;i++)
    {
      var keyword = this.props.keyWords[i];
      if(this.props.data.search(keyword.keyword) > -1){
        foundWord = keyword.keyword;
        foundColor = keyword.color;
        break;
      }
    }
    var style = {
      "backgroundColor":foundColor
    } 
    return(
        <div class="lineData">
          <Highlighter
            highlightStyle={style}
            searchWords={[foundWord]}
            autoEscape={true}
            textToHighlight={this.props.data}
          />
        </div>
        );
  };
}

export default LineData;