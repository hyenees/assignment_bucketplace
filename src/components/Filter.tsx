import React from "react";
import styled from "styled-components";
import { RootState } from "reducers";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilterBtn } from "actions";
import checked from "images/bt-checkbox-checked.svg";
import unchecked from "images/bt-checkbox.svg";

const Filter: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { isChecked } = useSelector((state: RootState) => state.CardReducer);

  return (
    <FilterLayout>
      <img
        src={isChecked ? checked : unchecked}
        alt="check"
        onClick={() => {
          dispatch(toggleFilterBtn());
        }}
      />
      스크랩한 것만 보기
    </FilterLayout>
  );
};

export default Filter;

const FilterLayout = styled.div`
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
