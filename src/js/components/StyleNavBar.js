import React from 'react';
import  store  from "../store/index"
import * as Actions from '../actions/index'
import KeyWordData from "../types/KeyWordData"

import { connect } from 'react-redux';
import KeyWordDisplay from "./KeyWordDisplay"


@connect((store)=>{
  return{
    keyWords: store.propsPage.keyWords
  }
})
class StyleNavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      keywordData: new KeyWordData("","#000000")
    }
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeKeyword = this.handleChangeKeyword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeColor(event){
    this.state.keywordData.color = event.target.value;
    this.setState({keywordData: this.state.keywordData});
  }
  handleChangeKeyword(event){
    this.state.keywordData.keyword = event.target.value;
    this.setState({keywordData: this.state.keywordData});
  }

  handleSubmit(event){
    event.preventDefault();
    console.log("handleSubmit");
    let objCopy = Object.assign({}, this.state.keywordData);
    store.dispatch(Actions.addKeyword(objCopy));
  }
  render (){
    return(
        <div id="styleNavBar">
          <div>
            {this.props.keyWords.map((value, index) => {
              return <KeyWordDisplay key={index} keyword={value.keyword} color={value.color}> </KeyWordDisplay>
            })}
          </div>
          <div id="addKeyWords">
            <form onSubmit={this.handleSubmit}>
              <label for="keyWordsInput">key word to find:</label>
              <input type="text" id="keyWordsInput" name="keyWordsInput" size="10" required
                     value={this.state.keywordData.keyword} onChange={this.handleChangeKeyword}></input>


              <input type="color" id="Highlight" name="Highlight" required
                     value={this.state.keywordData.color} onChange={this.handleChangeColor}></input>
              <label for="Highlight" >Highlight color</label>

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>);
  };
}

export default StyleNavBar;