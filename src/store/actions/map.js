import {
    GET_LIST,
} from "../types/map";

// ACTIONS
const getList = (markers) => ({
    type: GET_LIST,
    markers
});

export {
    getList,
};