import {
  BUSCAR_COCKTAILS,
  COCKTAIL_OBTENIDO,
  COCKTAILS_ERROR,
  INFO_ABIERTA,
  INFO_CERRADA,
} from '../actions/types';

const initialState = {
  listaCocktails: [],
  cocktailActivo: null,
  cocktailsObtenidos: false,
  cocktailsError: false,
  infoAbierta: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BUSCAR_COCKTAILS:
      return {
        ...state,
        listaCocktails: [],
        cocktailsObtenidos: false,
        cocktailsError: false,
      };
    case COCKTAIL_OBTENIDO:
      return {
        ...state,
        listaCocktails: action.cocktails,
        cocktailsObtenidos: true,
      };
    case COCKTAILS_ERROR:
      return {
        ...state,
        cocktailsObtenidos: false,
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
