import {combineReducers, configureStore, createStore} from "@reduxjs/toolkit";
import infoReducer from './info/reducer'

export default configureStore({
    reducer: {
        info: infoReducer
    },
    devTools: true,
});
