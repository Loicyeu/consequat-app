"use strict";

import RecipeIngredient from "./RecipeIngredient.js";

class Recipe {
    id;
    title;
    image;
    servings;
    readyInMinutes;
    healthScore;
    spoonacularScore;
    pricePerServing;
    glutenFree; //sans gluten
    vegan;
    vegetarian;
    summary;

    /**
     * Les ingrédients de la recette
     * @type {RecipeIngredient[]}
     */
    ingredients = [];

    /**
     *
     * @param {Object} recipe La recette.
     */
    constructor(recipe) {
        Object.assign(this, recipe)
        this.ingredients = recipe.extendedIngredients.map(ing => new RecipeIngredient(ing))
    }

    get ingredients() {
        return this.ingredients;
    }

}

export default Recipe;