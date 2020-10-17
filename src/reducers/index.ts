import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CardReducer from "./card";
import { CardState } from "store/types";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["CardReducer"],
};

export interface RootState {
  CardReducer: CardState;
}

const rootReducer = combineReducers<RootState>({
  CardReducer,
});

export default persistReducer(persistConfig, rootReducer);