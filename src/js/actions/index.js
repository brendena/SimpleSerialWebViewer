import * as consts from "../constants/action-types";

export function addKeyword(payload) {
    return { type: consts.ADD_KEYWORD, payload }
};