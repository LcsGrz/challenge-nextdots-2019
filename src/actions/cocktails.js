/* eslint-disable */
import {
  BUSCAR_COCKTAILS,
  COCKTAIL_OBTENIDO,
  COCKTAILS_ERROR,
  INFO_ABIERTA,
  INFO_CERRADA,
} from './types';

export const cocktailsObtenidos = cocktails => {
  return {
    type: COCKTAIL_OBTENIDO,
    cocktails,
  };
};

const resetState = () => {
  return {
    type: BUSCAR_COCKTAILS,
  };
};

export const cocktailError = () => {
  return {
    type: COCKTAILS_ERROR,
  };
};
export const infoAbierta = cocktailActivo => {
  return {
    type: INFO_ABIERTA,
    cocktailActivo
  };
};
export const infoCerrada = () => {
  return {
    type: INFO_CERRADA,
  };
};

const guardarInformacion = cocktail => {
  return dispatch => {
    let listaCocktails = [];
    Promise.all(
      cocktail.map(c => {
        c = c.drinks[0];
        let ingredientes = [];
        let cantidades = [];
        for (let x = 1; x <= 15; x++) {
          if (c[`strIngredient${x}`]) {
            ingredientes.push(c[`strIngredient${x}`]);
            cantidades.push(c[`strMeasure${x}`]);
          }
        }
        listaCocktails.push({
          ID: c.idDrink,
          Titulo: c.strDrink,
          Imagen: c.strDrinkThumb,
          Ingredientes: ingredientes,
          Cantidades: cantidades,
          Preparacion: c.strInstructions,
        });
      })
    ).then(() => {
      dispatch(cocktailsObtenidos(listaCocktails));
    });
  };
};

const buscarMasInformacion = datos => {
  return dispatch => {
    Promise.all(
      datos.map(d =>
        fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${d.idDrink}`).then(res =>
          res.json()
        )
      )
    ).then(drinks => {
      dispatch(guardarInformacion(drinks));
    });
  };
};

export const buscarCocktails = () => {
  return dispatch => {
    dispatch(resetState());
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass', {
      method: 'POST',
    })
      .catch(err => {
        console.log(err);
        dispatch(cocktailError());
      })
      .then(res => res.json())
      .then(parsedRes => {
        dispatch(buscarMasInformacion(parsedRes.drinks));
      });
  };
};
