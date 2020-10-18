export const GET_CARDS = "GET_CARDS";
export const ADD_PAGE_NUM = "ADD_PAGE_NUM";
export const TOGGLE_SCRAP_BTN = "TOGGLE_SCRAP_BTN";
export const ADD_SCRAP_CARD = "ADD_SCRAP_CARD";
export const REMOVE_SCRAP_CARD = "REMOVE_SCRAP_CARD";
export const TOGGLE_FILTER_BTN = "TOGGLE_FILTER_BTN";

export interface Card {
  id: number;
  image_url: string;
  nickname: string;
  profile_image_url: string;
  isScraped: boolean;
}

export interface CardState {
  cards: Card[];
  hasMore: boolean;
  pageNum: number;
  scrapList: Card[];
  isChecked: boolean;
}

export interface GetCardsAction {
  type: typeof GET_CARDS;
  payload: Card[];
}

export interface AddPageNumAction {
  type: typeof ADD_PAGE_NUM;
}

export interface ToggleScrapBtnAction {
  type: typeof TOGGLE_SCRAP_BTN;
  id: number;
}

export interface AddScrapCardAction {
  type: typeof ADD_SCRAP_CARD;
  payload: Card;
}

export interface RemoveScrapCardAction {
  type: typeof REMOVE_SCRAP_CARD;
  payload: Card;
}

export interface ToggleFilterBtnAction {
  type: typeof TOGGLE_FILTER_BTN;
}

export type CardActionTypes =
  | GetCardsAction
  | AddPageNumAction
  | ToggleScrapBtnAction
  | AddScrapCardAction
  | RemoveScrapCardAction
  | ToggleFilterBtnAction;
