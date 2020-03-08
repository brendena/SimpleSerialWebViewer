import * as consts from "../constants/action-types";
import * as constTypes from "../constants/constsTypes"
import * as log from 'loglevel';
import produce from "immer";
import KeyWordData from "../types/KeyWordData";
import UartDevice from "../types/UartDevice";

const initialState = {
    //properties of the page that will not be synced across all instances of the browser
    propsPage:{
        test:"string test",
        keyWords: [
                   new KeyWordData("Fatal","#f70a0a"),
                   new KeyWordData("Error","#f70a0a"),
                   new KeyWordData("Warn","#ffce00"),
                   new KeyWordData("Info","#00ffec"),
                   new KeyWordData("Debug","#00ffec"),
                   new KeyWordData("Trace","#00ffec")],
        logs:{
            //"uart1":["[debug] - test this out","[info] - test this out","[warn] - test this out"],
            //"uart2":["test2"]
            "uart1":[],
            "uart2":[]
        },   
        uartDevices:[
            //new UartDevice("uart1",4800),
            //new UartDevice("uart2",4800)
        ],
        uartDeviceState:{
            "uart1": constTypes.StateUARTDevice.unconnected
        }     
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
            if(draft.propsPage.uartDeviceState["uart1"] != constTypes.StateUARTDevice.paused){
                draft.propsPage.logs["uart1"].unshift(action.payload);
                //draft.propsPage.logs["uart1"].push(action.payload);
            }
        }
        else if(action.type === consts.ADD_UART_DEVICE)
        {
            draft.propsPage.uartDevices.push(action.payload);
        }
        else if(action.type === consts.ACTION_ClEAR_LOGS)
        {
            console.log(action.payload)
            draft.propsPage.logs[action.payload] = [];
        }
        else if(action.type === consts.CHANGE_UART_DEVICE_STATE){
            draft.propsPage.uartDeviceState["uart1"] = action.payload["state"];
            console.log(draft.propsPage.uartDeviceState["uart1"])
        }
    });


    

    return newState;
}

export default rootReducer;