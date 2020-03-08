import * as constTypes from "../constants/constsTypes"
import * as consts from "../constants/action-types";

const handleSettings = (store) => (next) => (action) =>
{
    return next(action);
}

export {handleSettings};