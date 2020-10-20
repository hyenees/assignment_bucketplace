import {
  CardActionTypes,
  GET_CARDS,
  CardState,
  ADD_PAGE_NUM,
  ADD_SCRAP_CARD,
  REMOVE_SCRAP_CARD,
  TOGGLE_FILTER_BTN,
  Card,
  TOGGLE_SCRAP_BTN,
} from "../store/types";
import * as localStorageUtil from "utils/localStorageUtil";

const initialState: CardState = {
  cards: [],
  hasMore: true,
  pageNum: 1,
  scrapList: localStorageUtil.getScrapCards(),
  isChecked: false,
};

const CardReducer = (
  state = initialState,
  action: CardActionTypes
): CardState => {
  switch (action.type) {
    case GET_CARDS:
      const newCards = action.payload.map((card) => {
        const scrap = state.scrapList.find(
          (scrapCard: Card) => scrapCard.id === card.id
        );
        const newCard = { ...card };
        if (scrap) {
          newCard.isScraped = true;
        } else {
          newCard.isScraped = false;
        }
        return newCard;
      });
      return {
        ...state,
        cards: state.cards.concat(newCards),
        hasMore: action.payload.length === 0 ? false : true,
      };
    case ADD_PAGE_NUM:
      return { ...state, pageNum: state.pageNum + 1 };
    case TOGGLE_SCRAP_BTN:
      const newCard = state.cards.map((card) => {
        if (card.id === action.id) {
          card.isScraped = !card.isScraped;
        }
        return card;
      });
      return { ...state, cards: newCard };
    case ADD_SCRAP_CARD:
      return {
        ...state,
        scrapList: localStorageUtil.addScrapCards(action.payload),
      };
    case REMOVE_SCRAP_CARD:
      return {
        ...state,
        scrapList: localStorageUtil.removeScrapCard(action.payload.id),
      };
    case TOGGLE_FILTER_BTN:
      return {
        ...state,
        isChecked: !state.isChecked,
      };
    default:
      return state;
  }
};

export default CardReducer;
