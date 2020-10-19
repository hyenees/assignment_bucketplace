import {
  ToastState,
  ToastActionTypes,
  SHOW_TOAST,
  DELETE_TOAST,
} from "../store/types";

const initialState: ToastState = {
  toastList: [],
};

const CardReducer = (
  state = initialState,
  action: ToastActionTypes
): ToastState => {
  switch (action.type) {
    case SHOW_TOAST:
      return {
        ...state,
        toastList: state.toastList.concat({
          id: Math.floor(Math.random() * 100 + 1),
          description: action.description,
        }),
      };
    case DELETE_TOAST:
      return {
        ...state,
        toastList: state.toastList.filter((toast) => toast.id !== action.id),
      };
    default:
      return state;
  }
};

export default CardReducer;
