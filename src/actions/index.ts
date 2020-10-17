import {
  GetCardsAction,
  GET_CARDS,
  Card,
  AddPageNumAction,
  ADD_PAGE_NUM,
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
