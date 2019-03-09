import {
  COCKTAIL_OBTENIDO,
  COCKTAILS_ERROR,
  INFO_ABIERTA,
  INFO_CERRADA,
  SET_FILTER,
} from '../actions/types';

const initialState = {
  listaCocktails: [],
  filter: '',
  cocktailActivo: null,
  cocktailsError: false,
  infoAbierta: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COCKTAIL_OBTENIDO:
      return {
        ...state,
        listaCocktails: action.cocktails,
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
    case INFO_ABIERTA:
      return {
        ...state,
        infoAbierta: true,
        cocktailActivo: action.cocktailActivo,
      };
    case INFO_CERRADA:
      return {
        ...state,
        infoAbierta: false,
      };
    default:
      return state;
  }
};
