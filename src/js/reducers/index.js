import * as consts from "../constants/action-types";
import * as log from 'loglevel';
import produce from "immer";
import KeyWordData from "../types/KeyWordData";
import UartDevice from "../types/UartDevice";

const initialState = {
    //properties of the page that will not be synced across all instances of the browser
    propsPage:{
        test:"string test",
        keyWords: [new KeyWordData("debug","#f70a0a"),new KeyWordData("info","#8eff4d"),new KeyWordData("warn","#ffce00")],
        logs:{
            "uart1":["[debug] - test this out","[info] - test this out","[warn] - test this out"],
            "uart2":["test2"]
        },   
        uartDevices:[
            new UartDevice("uart1",4800),
            new UartDevice("uart2",4800)
        ]     
    }
};

function rootReducer(state = initialState, action){
    var newState = produce(state,draft =>{
        
        log.info("changing state - " + action.type);

        if(action.type === consts.ADD_KEYWORD)
        {
            draft.propsPage.keyWords.push(action.payload);
        }
        else if(action.type === consts.ADD_SERIAL_RESPONSE)
        {
            draft.propsPage.logs["uart1"].push(action.payload);
        }
    });


    

    return newState;
}

export default rootReducer;