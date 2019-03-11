import {
  COCKTAILS_OBTAINED,
  COCKTAILS_ERROR,
  RETRY,
  SET_ACTIVE_COCKTAIL,
  SET_FILTER,
} from '../actions/types';

const initialState = {
  cocktailList: [],
  filter: '',
  activeCocktail: null,
  cocktailsError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COCKTAILS_OBTAINED:
      return {
        ...state,
        cocktailList: action.cocktails,
        cocktailsError: null,
      };
    case RETRY:
      return {
        ...state,
        cocktailsError: null,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case COCKTAILS_ERROR:
      return {
        ...state,
        cocktailsError: action.msg,
      };
    case SET_ACTIVE_COCKTAIL:
      return {
        ...state,
        activeCocktail: action.activeCocktail,
      };
    default:
      return state;
  }
};
