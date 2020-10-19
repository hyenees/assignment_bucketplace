import { combineReducers } from "redux";
import CardReducer from "./card";
import { CardState } from "store/types";

export interface RootState {
  CardReducer: CardState;
}

const rootReducer = combineReducers<RootState>({
  CardReducer,
});

export default rootReducer;
