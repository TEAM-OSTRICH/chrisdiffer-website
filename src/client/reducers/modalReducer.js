import * as types from '../constants/actionTypes.js';

const initialState = {
  isOpen: false,
  currentImg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.MODAL_DISPLAY:
      return {
        ...state,
        isOpen: true,
        currentImg: action.payload.target.id,
      };
    case types.MODAL_CLOSE:
      return {
        ...state,
        isOpen: false,
        currentImg: '',
      };
    default:
      return initialState;
  }
};
