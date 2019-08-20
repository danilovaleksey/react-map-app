import {
    GET_LIST,
} from "../types/map";

// ACTIONS
const getList = (list) => ({
    type: GET_LIST,
    list
});

export {
    getList,
};