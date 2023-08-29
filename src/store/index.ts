import {configureStore} from "@reduxjs/toolkit";
import gridReducer from "./gridSlice";

export default configureStore({
    reducer: {
        grid: gridReducer
    }
})