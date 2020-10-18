import {
  CardActionTypes,
  GET_CARDS,
  CardState,
  ADD_PAGE_NUM,
  ADD_SCRAP_CARD,
  REMOVE_SCRAP_CARD,
  Card,
} from "../store/types";

const initialState: CardState = {
  cards: [],
  hasMore: true,
  pageNum: 1,
  scrapList: [],
  scrapedIds: [],
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
      const isScraped: number[] = state.scrapedIds;
      action.payload.forEach((card) => {
        scrapCards.forEach((scrapCard) => {
          if (card.id === scrapCard.id) {
            isScraped.push(scrapCard.id);
          }
        });
      });
      if (action.payload.length === 0) {
        return { ...state, hasMore: false };
      } else {
        return {
          ...state,
          cards: state.cards.concat(action.payload),
          scrapList: scrapCards,
          scrapedIds: isScraped,
        };
      }
    case ADD_PAGE_NUM:
      return { ...state, pageNum: state.pageNum + 1 };
    case ADD_SCRAP_CARD:
      let scrap = state.scrapList;
      scrap = scrap.concat(action.payload);
      localStorage.setItem("SCRAP", JSON.stringify(scrap));
      return {
        ...state,
        scrapList: scrap,
        scrapedIds: state.scrapedIds.concat(action.payload.id),
      };
    case REMOVE_SCRAP_CARD:
      const stringScrap = localStorage.getItem("SCRAP");
      const prevScrap: Card[] = stringScrap ? JSON.parse(stringScrap) : [];
      const removedScrap = prevScrap.filter(
        (card) => card.id !== action.payload.id
      );
      localStorage.setItem("SCRAP", JSON.stringify(removedScrap));
      return {
        ...state,
        scrapList: removedScrap,
        scrapedIds: state.scrapedIds.filter((id) => id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default CardReducer;
