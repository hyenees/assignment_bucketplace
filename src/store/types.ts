export const GET_CARDS = "GET_CARDS";
export const ADD_PAGE_NUM = "ADD_PAGE_NUM";

export interface Card {
  id: number;
  image_url: string;
  nickname: string;
  profile_image_url: string;
}

export interface CardState {
  cards: Card[];
  hasMore: boolean;
  pageNum: number;
}

export interface GetCardsAction {
  type: typeof GET_CARDS;
  payload: Card[];
}

export interface AddPageNumAction {
  type: typeof ADD_PAGE_NUM;
}

export type CardActionTypes = GetCardsAction | AddPageNumAction;
