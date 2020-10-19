import { Card } from "store/types";

const SCRAPCARDS = "SCRAP";

export const getScrapCards = () => {
  const stringScrapCards = localStorage.getItem(SCRAPCARDS);
  const scrapCards = stringScrapCards ? JSON.parse(stringScrapCards) : [];
  return scrapCards;
};

export const addScrapCards = (card: Card) => {
  const scrapCards = getScrapCards().concat(card);
  setScrapCards(scrapCards);
  return scrapCards;
};

export const removeScrapCard = (id: number) => {
  const removedScrap = getScrapCards().filter((card: Card) => {
    return card.id !== id;
  });
  setScrapCards(removedScrap);
  return removedScrap;
};

export const setScrapCards = (cards: Card[]) => {
  localStorage.setItem(SCRAPCARDS, JSON.stringify(cards));
};
