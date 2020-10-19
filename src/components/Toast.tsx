import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "reducers";
import { deleteToast } from "actions";

const Toast: React.FunctionComponent = () => {
  const { toastList } = useSelector((state: RootState) => state.ToastReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        dispatch(deleteToast(toastList[0].id));
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [dispatch, toastList]);

  return (
    <ToastLayout>
      {toastList.map((toast, idx) => (
        <ToastBox key={idx}>
          <p>{toast.description}</p>
        </ToastBox>
      ))}
    </ToastLayout>
  );
};

export default Toast;

const ToastLayout = styled.div`
  position: fixed;
  right: 0;
  z-index: 2;
`;

const ToastBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 54px;
  margin: 12px;
  background: rgba(55, 60, 61, 0.9);
  border-radius: 8px;
  color: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  transition: transform 0.4s ease-in-out;
  animation: slideToLeft 0.3s;

  @keyframes slideToLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
