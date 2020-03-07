import * as consts from "../constants/action-types";

export function addKeyword(payload) {
    return { type: consts.ADD_KEYWORD, payload }
};


export function addSerialResponse(payload) {
    return { type: consts.ADD_SERIAL_RESPONSE, payload }
};