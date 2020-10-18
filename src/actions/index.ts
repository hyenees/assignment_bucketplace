import {
  GetCardsAction,
  GET_CARDS,
  Card,
  AddPageNumAction,
  ADD_PAGE_NUM,
  ToggleScrapBtnAction,
  TOGGLE_SCRAP_BTN,
  AddScrapCardAction,
  ADD_SCRAP_CARD,
  RemoveScrapCardAction,
  REMOVE_SCRAP_CARD,
  ToggleFilterBtnAction,
  TOGGLE_FILTER_BTN,
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

export const toggleScrapBtn = (id: number): ToggleScrapBtnAction => {
  return {
    type: TOGGLE_SCRAP_BTN,
    id,
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

export const toggleFilterBtn = (): ToggleFilterBtnAction => {
  return {
    type: TOGGLE_FILTER_BTN,
  };
};
