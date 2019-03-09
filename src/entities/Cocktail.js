class Cocktail {
  constructor(strDrink, strDrinkThumb, idDrink, instructions, ingredients, amounts) {
    this.name = strDrink;
    this.photo = strDrinkThumb;
    this.ID = idDrink;
    this.instructions = instructions;
    this.ingredients = ingredients;
    this.amounts = amounts;
  }

  nameMatch = text => this.name.toUpperCase().indexOf(text.toUpperCase()) > -1;

  static fromJSON(drink) {
    let ingredients = [];
    let amounts = [];
    for (let x = 1; x <= 15; x++) {
      if (drink[`strIngredient${x}`]) {
        ingredients.push(drink[`strIngredient${x}`]);
        amounts.push(drink[`strMeasure${x}`]);
      }
    }

    return new Cocktail(
      drink.strDrink,
      drink.strDrinkThumb,
      drink.idDrink,
      drink.strInstructions,
      ingredients,
      amounts
    );
  }
}

export default Cocktail;
