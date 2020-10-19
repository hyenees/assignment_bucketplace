import React from "react";
import styled from "styled-components";
import { RootState } from "reducers";
import { useDispatch, useSelector } from "react-redux";
import {
  addScrapCard,
  removeScrapCard,
  toggleScrapBtn,
  showToast,
} from "actions";
import bookmark from "images/on-img.svg";
import blueBookmark from "images/blue.svg";

const Cards: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { cards, scrapList, isChecked } = useSelector(
    (state: RootState) => state.CardReducer
  );
  const showingCards = isChecked ? scrapList : cards;

  return (
    <CardListLayout>
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
              if (card.isScraped) {
                dispatch(toggleScrapBtn(card.id));
                dispatch(removeScrapCard(card));
                dispatch(showToast("스크랩을 해제했습니다."));
              } else {
                dispatch(toggleScrapBtn(card.id));
                dispatch(addScrapCard(card));
                dispatch(showToast("스크랩 되었습니다."));
              }
            }}
          />
        </Card>
      ))}
    </CardListLayout>
  );
};

export default Cards;

const CardListLayout = styled.div`
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

  &:hover {
    filter: brightness(85%);
  }
`;
