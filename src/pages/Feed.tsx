import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { RootState } from "reducers";
import { useDispatch, useSelector } from "react-redux";
import { getCards, addPageNum } from "actions";
import { fetchCards } from "api";
import Filter from "components/Filter";
import CardList from "components/CardList";
import Toast from "components/Toast";

const Feed: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { hasMore, pageNum } = useSelector(
    (state: RootState) => state.CardReducer
  );

  useEffect(() => {
    (async () => {
      try {
        const res = await fetchCards(pageNum);
        dispatch(getCards(res));
      } catch (err) {
        console.log(err);
      }
    })();
  }, [pageNum, dispatch]);

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    if (!hasMore) {
      return;
    }
    if (scrollTop + clientHeight === scrollHeight) {
      dispatch(addPageNum());
    }
  }, [dispatch, hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <FeedLayout>
      <Filter />
      <Toast />
      <CardList />
    </FeedLayout>
  );
};

export default Feed;

const FeedLayout = styled.main`
  max-width: 1256px;
  margin: 0 auto;
  padding: 30px 60px;
`;
