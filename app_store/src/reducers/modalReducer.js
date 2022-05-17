import { EDIT_LIST, VISIBILITY_MODAL_WINDOW } from "./actions/types";

const defaultState = {
  visible: false,
  id: null,
};

export const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case VISIBILITY_MODAL_WINDOW:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
