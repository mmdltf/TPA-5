import { createStore } from "redux";
import todoreducer from "../reducer/reducer";
import { combineReducers } from "redux";
const ReducerGabungan = combineReducers ({
    todo : todoreducer,
})

const store = createStore(ReducerGabungan);

export default store;
