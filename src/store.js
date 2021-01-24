import { createStore } from "redux";
import menu from "./reducers/menu";

const store = createStore(menu);

//store.subscribe(() => console.log(store.getState()));

export default store;
