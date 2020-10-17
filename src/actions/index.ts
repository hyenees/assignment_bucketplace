import { GetCardsAction, GET_CARDS, Card } from "store/types";

export const getCards = (cards: Card[]): GetCardsAction => {
  return {
    type: GET_CARDS,
    payload: cards,
  };
};
