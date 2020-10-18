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

const initialState: CardState = {
  cards: [],
  hasMore: true,
  pageNum: 1,
  scrapList: [],
  isChecked: false,
};

const CardReducer = (
  state = initialState,
  action: CardActionTypes
): CardState => {
  switch (action.type) {
    case GET_CARDS:
      const stringScrapCards = localStorage.getItem("SCRAP");
      const scrapCards: Card[] = stringScrapCards
        ? JSON.parse(stringScrapCards)
        : [];
      const newCards = action.payload.map((card) => {
        const scrap = scrapCards.find((scrapCard) => scrapCard.id === card.id);
        const newObj = { ...card };
        if (scrap) {
          newObj.isScraped = true;
        } else {
          newObj.isScraped = false;
        }
        return newObj;
      });
      if (action.payload.length === 0) {
        return { ...state, hasMore: false };
      } else {
        return {
          ...state,
          cards: state.cards.concat(newCards),
          scrapList: scrapCards,
        };
      }
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
      let scrap = state.scrapList;
      scrap = scrap.concat(action.payload);
      localStorage.setItem("SCRAP", JSON.stringify(scrap));
      return {
        ...state,
        scrapList: scrap,
      };
    case REMOVE_SCRAP_CARD:
      const stringScrap = localStorage.getItem("SCRAP");
      const prevScrap: Card[] = stringScrap ? JSON.parse(stringScrap) : [];
      const removedScrap = prevScrap.filter((card) => {
        return card.id !== action.payload.id;
      });
      localStorage.setItem("SCRAP", JSON.stringify(removedScrap));

      return {
        ...state,
        scrapList: removedScrap,
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
