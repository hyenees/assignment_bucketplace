import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { fetchCards } from "api";
import { RootState } from "reducers";
import { useDispatch, useSelector } from "react-redux";
import { getCards, addPageNum, addScrapCard, removeScrapCard } from "actions";
import checked from "images/bt-checkbox-checked.svg";
import unchecked from "images/bt-checkbox.svg";
import bookmark from "images/on-img.svg";
import blueBookmark from "images/blue.svg";

const Feed = () => {
  const dispatch = useDispatch();
  const { cards, hasMore, pageNum, scrapedIds } = useSelector(
    (state: RootState) => state.CardReducer
  );

  useEffect(() => {
    (async () => {
      const res = await fetchCards(pageNum);
      dispatch(getCards(res));
    })();
    console.log(pageNum);
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
      <Filter>
        <img src={unchecked} alt="check" />
        스크랩한 것만 보기
      </Filter>
      <Cards>
        {cards.map((card) => (
          <Card key={card.id}>
            <UserInfo>
              <img
                src={card.profile_image_url}
                alt="profile_image"
                className="profile"
              />
              <div className="nickname">{card.nickname}</div>
            </UserInfo>
            <Image src={card.image_url} />
            {scrapedIds.includes(card.id) ? (
              <BookmarkBtn
                src={blueBookmark}
                alt="bookmark"
                onClick={() => dispatch(removeScrapCard(card))}
              />
            ) : (
              <BookmarkBtn
                src={bookmark}
                alt="bookmark"
                onClick={() => dispatch(addScrapCard(card))}
              />
            )}
          </Card>
        ))}
      </Cards>
    </FeedLayout>
  );
};

export default Feed;

const FeedLayout = styled.main`
  width: 1256px;
  margin: 0 auto;
  padding: 30px 60px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  color: #424242;

  img {
    width: 24px;
    height: 24px;
    margin-right: 6px;
    cursor: pointer;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -20px;
`;

const Card = styled.div`
  position: relative;
  padding: 30px 20px 0 0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;

  .profile {
    width: 36px;
    height: 36px;
    margin-right: 10px;
    object-fit: contain;
  }

  .nickname {
    font-weight: bold;
    line-height: 1.27;
    color: rgba(0, 0, 0, 0.74);
  }
`;

const Image = styled.img`
  width: 268px;
  height: 268px;
  border-radius: 10px;
  cursor: pointer;
`;

const BookmarkBtn = styled.img`
  position: absolute;
  bottom: 10px;
  right: 30px;
  width: 32px;
  height: 32px;
  object-fit: contain;
`;
