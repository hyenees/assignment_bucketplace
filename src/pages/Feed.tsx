import React, { useEffect } from "react";
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
  }, [pageNum, dispatch, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        hasMore
      ) {
        dispatch(addPageNum());
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, hasMore]);

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
