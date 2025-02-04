import { createStore } from 'redux';
import RootReducer from "./reducer";

const store = createStore(RootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;