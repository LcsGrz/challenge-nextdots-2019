import {
  BUSCAR_COCKTAILS,
  COCKTAILS_OBTENIDOS,
  COCKTAILS_ERROR,
  INFO_ABIERTA,
  INFO_CERRADA,
} from './types';
import NextDotsLogo from '../assets/images/common/nextDotsLogo.png';

export const cocktailsObtenidos = lista => {
  return {
    type: COCKTAILS_OBTENIDOS,
    asd: lista,
    lista: [
      {
        key: '0',
        titulo: 'Apple Grande',
        imagen: NextDotsLogo,
        ingredientes: ['tequila y paco', 'otra droga', 'more droga'],
      },
      {
        key: '1',
        titulo: 'Paco en paco',
        imagen: NextDotsLogo,
        ingredientes: ['zapato', 'very much'],
      },
      {
        key: '2',
        titulo: 'Apple Grande',
        imagen: NextDotsLogo,
        ingredientes: ['asd', 'eeeee', 'more droga', 'more droga', 'more droga'],
      },
      {
        key: '3',
        titulo: 'Apple Grande',
        imagen: NextDotsLogo,
        ingredientes: ['asd', 'eeeee', 'more droga', 'more droga', 'more droga'],
      },
      {
        key: '4',
        titulo: 'Apple Grande',
        imagen: NextDotsLogo,
        ingredientes: ['asd', 'eeeee', 'more droga', 'more droga', 'more droga'],
      },
      {
        key: '5',
        titulo: 'Apple Grande',
        imagen: NextDotsLogo,
        ingredientes: ['asd', 'eeeee', 'more droga', 'more droga', 'more droga'],
      },
      {
        key: '6',
        titulo: 'Apple Grande',
        imagen: NextDotsLogo,
        ingredientes: ['asd', 'eeeee', 'more droga', 'more droga', 'more droga'],
      },
      {
        key: '7',
        titulo: 'Apple Grande',
        imagen: NextDotsLogo,
        ingredientes: ['asd', 'eeeee', 'more droga', 'more droga', 'more droga'],
      },
    ],
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
