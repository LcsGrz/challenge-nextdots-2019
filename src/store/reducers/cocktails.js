import {
  COCKTAILS_OBTAINED,
  COCKTAILS_ERROR,
  FETCHING,
  INFO_OPEN,
  INFO_CLOSE,
  SET_FILTER,
} from '../actions/types';

const initialState = {
  cocktailList: [],
  filter: '',
  activeCocktail: null,
  isFetching: false,
  cocktailsError: false,
  infoOpened: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COCKTAILS_OBTAINED:
      return {
        ...state,
        cocktailList: action.cocktails,
        isFetching: false,
        cocktailsError: false,
      };
    case FETCHING:
      return {
        ...state,
        isFetching: true,
        cocktailsError: false,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case COCKTAILS_ERROR:
      return {
        ...state,
        isFetching: false,
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
