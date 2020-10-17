import {
  CardActionTypes,
  GET_CARDS,
  CardState,
  ADD_PAGE_NUM,
} from "../store/types";

const initialState: CardState = {
  cards: [],
  hasMore: true,
  pageNum: 1,
};

const CardReducer = (
  state = initialState,
  action: CardActionTypes
): CardState => {
  switch (action.type) {
    case GET_CARDS:
      if (action.payload.length === 0) {
        return { ...state, hasMore: false };
      } else {
        return { ...state, cards: state.cards.concat(action.payload) };
      }
    case ADD_PAGE_NUM:
      return { ...state, pageNum: state.pageNum + 1 };
    default:
      return state;
  }
};

export default CardReducer;
