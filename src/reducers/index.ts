import { combineReducers } from "redux";
import CardReducer from "./card";
import ToastReducer from "./toast";
import { CardState, ToastState } from "store/types";

export interface RootState {
  CardReducer: CardState;
  ToastReducer: ToastState;
}

const rootReducer = combineReducers<RootState>({
  CardReducer,
  ToastReducer,
});

export default rootReducer;
