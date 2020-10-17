import axios from "axios";
import { Card } from "store/types";

const client = axios.create({
  baseURL: "https://bucketplace-coding-test.s3.amazonaws.com",
});

export const fetchCards = async (page: number): Promise<Card[]> => {
  const res = await client.get(`/cards/page_${page}.json`);
  return res.data;
};
