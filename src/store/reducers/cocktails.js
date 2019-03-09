import {
  COCKTAILS_OBTAINED,
  COCKTAILS_ERROR,
  INFO_OPEN,
  INFO_CLOSE,
  SET_FILTER,
} from '../actions/types';

const initialState = {
  cocktailList: [],
  filter: '',
  activeCocktail: null,
  cocktailsError: false,
  infoOpened: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COCKTAILS_OBTAINED:
      return {
        ...state,
        cocktailList: action.cocktails,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case COCKTAILS_ERROR:
      return {
        ...state,
        cocktailsError: true,
      };
    case INFO_OPEN:
      return {
        ...state,
        infoOpened: true,
        activeCocktail: action.activeCocktail,
      };
    case INFO_CLOSE:
      return {
        ...state,
        infoOpened: false,
      };
    default:
      return state;
  }
};
