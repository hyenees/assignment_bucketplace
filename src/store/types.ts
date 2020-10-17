export const GET_CARDS = "GET_CARDS";

export interface Card {
  id: number;
  image_url: string;
  nickname: string;
  profile_image_url: string;
}

export interface CardState {
  cards: Card[];
}

export interface GetCardsAction {
  type: typeof GET_CARDS;
  payload: Card[];
}

export type CardActionTypes = GetCardsAction;
