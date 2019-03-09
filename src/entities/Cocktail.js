class Cocktail {
  constructor(strDrink, strDrinkThumb, idDrink, instructions, ingredients) {
    this.name = strDrink;
    this.photo = strDrinkThumb;
    this.ID = idDrink;
    this.instructions = instructions;
    this.ingredients = ingredients;
  }

  nameMatch(text) {
    const name = this.name.toUpperCase();
    return name.indexOf(text.toUpperCase()) > -1;
  }

  static fromJSON(drink) {
    let ingredients = [];
    for (let x = 1; x <= 15; x++) {
      if (drink[`strIngredient${x}`])
        ingredients = [
          ...ingredients,
          { ingredient: drink[`strIngredient${x}`], measure: drink[`strMeasure${x}`] },
        ];
    }

    return new Cocktail(
      drink.strDrink,
      drink.strDrinkThumb,
      drink.idDrink,
      drink.strInstructions,
      ingredients
    );
  }
}

export default Cocktail;
