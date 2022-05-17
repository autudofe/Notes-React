import {
  ADD_ARCHIVE_LIST,
  ADD_LIST,
  DELETE_LIST,
  EDIT_LIST,
  GENERAL_EDIT_LIST,
  VISIBILITY_MODAL_WINDOW,
} from "./types";

export const addArchiveList = (payload) => ({
  type: ADD_ARCHIVE_LIST,
  payload,
});
export const deleteList = (payload) => ({ type: DELETE_LIST, payload });
export const addList = (payload) => ({ type: ADD_LIST, payload });
export const editList = (payload) => ({ type: EDIT_LIST, payload });

export const visibilityModalWindow = (payload) => ({
  type: VISIBILITY_MODAL_WINDOW,
  payload,
});
