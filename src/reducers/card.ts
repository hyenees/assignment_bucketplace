import { CardActionTypes, GET_CARDS, CardState } from "../store/types";

const initialState: CardState = {
  cards: [],
};

const CardReducer = (
  state = initialState,
  action: CardActionTypes
): CardState => {
  switch (action.type) {
    case GET_CARDS:
      return { ...state, cards: action.payload };
    default:
      return state;
  }
};

export default CardReducer;
