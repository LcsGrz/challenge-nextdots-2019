import {
  BUSCAR_COCKTAILS,
  COCKTAILS_OBTENIDOS,
  COCKTAILS_ERROR,
  INFO_ABIERTA,
  INFO_CERRADA,
} from '../actions/types';

const initialState = {
  listaCocktails: [],
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
    case COCKTAILS_OBTENIDOS:
      return {
        ...state,
        listaCocktails: action.lista,
        cocktailsObtenidos: true,
        cocktailsError: false,
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
