import * as types from '../constants/actionTypes';

export const openModalDisplay = event => ({
  type: types.MODAL_DISPLAY,
  payload: event,
});

export const closeModalDisplay = () => ({
  type: types.MODAL_CLOSE,
});
