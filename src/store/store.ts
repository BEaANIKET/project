import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlices.ts";


const store = configureStore({
    reducer: {
        data: dataReducer,
    }
})

export { store };