import {
  GetCardsAction,
  GET_CARDS,
  Card,
  AddPageNumAction,
  ADD_PAGE_NUM,
  AddScrapCardAction,
  ADD_SCRAP_CARD,
  RemoveScrapCardAction,
  REMOVE_SCRAP_CARD,
} from "store/types";

export const getCards = (cards: Card[]): GetCardsAction => {
  return {
    type: GET_CARDS,
    payload: cards,
  };
};

export const addPageNum = (): AddPageNumAction => {
  return {
    type: ADD_PAGE_NUM,
  };
};

export const addScrapCard = (card: Card): AddScrapCardAction => {
  return {
    type: ADD_SCRAP_CARD,
    payload: card,
  };
};

export const removeScrapCard = (card: Card): RemoveScrapCardAction => {
  return {
    type: REMOVE_SCRAP_CARD,
    payload: card,
  };
};
