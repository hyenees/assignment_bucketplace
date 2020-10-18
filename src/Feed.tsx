import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { fetchCards } from "api";
import { RootState } from "reducers";
import { useDispatch, useSelector } from "react-redux";
import {
  getCards,
  addPageNum,
  addScrapCard,
  removeScrapCard,
  toggleFilterBtn,
  toggleScrapBtn,
} from "actions";
import checked from "images/bt-checkbox-checked.svg";
import unchecked from "images/bt-checkbox.svg";
import bookmark from "images/on-img.svg";
import blueBookmark from "images/blue.svg";

const Feed = () => {
  const dispatch = useDispatch();
  const { cards, hasMore, pageNum, scrapList, isChecked } = useSelector(
    (state: RootState) => state.CardReducer
  );
  const showingCards = isChecked ? scrapList : cards;

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
      <Filter>
        <img
          src={isChecked ? checked : unchecked}
          alt="check"
          onClick={() => {
            dispatch(toggleFilterBtn());
          }}
        />
        스크랩한 것만 보기
      </Filter>
      <Cards>
        {showingCards.map((card) => (
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
            <BookmarkBtn
              src={card.isScraped ? blueBookmark : bookmark}
              alt="bookmark"
              onClick={() => {
                dispatch(toggleScrapBtn(card.id));
                card.isScraped
                  ? dispatch(addScrapCard(card))
                  : dispatch(removeScrapCard(card));
              }}
            />
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
`;

const BookmarkBtn = styled.img`
  position: absolute;
  bottom: 10px;
  right: 30px;
  width: 32px;
  height: 32px;
  object-fit: contain;
  cursor: pointer;
`;
