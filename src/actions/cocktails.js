import {
  BUSCAR_COCKTAILS,
  COCKTAILS_OBTENIDOS,
  COCKTAILS_ERROR,
  INFO_ABIERTA,
  INFO_CERRADA,
} from './types';

export const cocktailsObtenidos = lista => {
  return {
    type: COCKTAILS_OBTENIDOS,
    lista,
  };
};

const resetState = () => {
  return {
    type: BUSCAR_COCKTAILS,
  };
};

export const buscarCocktails = () => {
  return dispatch => {
    dispatch(resetState());
    dispatch(cocktailsObtenidos([]));
  };
};
export const cocktailError = () => {
  return {
    type: COCKTAILS_ERROR,
  };
};
export const infoAbierta = () => {
  return {
    type: INFO_ABIERTA,
  };
};
export const infoCerrada = () => {
  return {
    type: INFO_CERRADA,
  };
};
