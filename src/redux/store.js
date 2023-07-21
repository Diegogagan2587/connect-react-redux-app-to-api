import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        users: 'place here user reducer'
    },
});

export default store;