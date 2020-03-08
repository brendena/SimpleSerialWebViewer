import * as consts from "../constants/action-types";

export function addKeyword(payload) {
    return { type: consts.ADD_KEYWORD, payload }
};


export function addSerialResponse(payload) {
    return { type: consts.ADD_SERIAL_RESPONSE, payload }
};

export function addUartDevice(payload) {
    return { type: consts.ADD_UART_DEVICE, payload }
};

export function actionClearLog(payload) {
    return { type: consts.ACTION_ClEAR_LOGS, payload }
};

export function changeUartDeviceState(payload) {
    return { type: consts.CHANGE_UART_DEVICE_STATE, payload }
};