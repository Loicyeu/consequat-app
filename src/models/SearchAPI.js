"use strict";

import {apiKey} from "@/models/API";
import Recipe from "@/models/Recipe";

class SearchAPI {
    static BASE_URL = "https://api.spoonacular.com/";

    /**
     *
     * @param query {String} La chaine de caractère à rechercher.
     * @param params {Object} Les paramètres de la recherche.
     * @return {Promise<unknown>} Retourne un tableau de recette simple (contenant juste un id, un nom et une image)
     */
    static findRecipes(query, params) {
        const url = this.BASE_URL + "recipes/complexSearch?apiKey=" + apiKey + "&query=" + query + "&number=10&" + this.verifyParams(params);
        return this.getRecipeFormQuery(url);
    }

    /**
     * Méthode permettant de récupérer les recettes a partir d'une url déjà formé.
     * @param query L'URL sur laquelle fetch
     * @return {Promise<unknown>} Retourne un tableau de recette simple.
     */
    static getRecipeFormQuery(query) {
        return new Promise((resolve, reject) => {
            fetch(query)
                .then(value => value.json())
                .then(data => {
                    data.request = query;
                    resolve(data);
                })
                .catch(reason => {
                    reject(reason)
                });
        });
    }

    /**
     *
     * @param params {Object}
     * @param params.diet {String}
     * @param params.cuisine {String}
     * @param params.type {String}
     * @return {string} Les paramètres stringified pour la requête.
     */
    static verifyParams(params) {
        let queryParams = "";

        if (params.diet !== "none") {
            queryParams += "diet=" + params.diet + "&";
        }
        if (params.cuisine !== "none") {
            queryParams += "cuisine=" + params.cuisine + "&";
        }
        if (params.type !== "none") {
            queryParams += "type=" + params.type + "&";
        }
        return queryParams;
    }

    /**
     *
     * @param {Number} recipeId L' id de la recette
     * @return {Promise<unknown>}
     */
    static getRecipeInformation(recipeId) {
        return new Promise((resolve, reject) => {
            const url = this.BASE_URL + "recipes/" + recipeId + "/information?apiKey=" + apiKey;
            fetch(url)
                .then(value => value.json())
                .then(data => {
                    resolve(new Recipe(data));
                })
                .catch(reason => reject(reason));
        });
    }

    static getAutocomplete(query) {
        return new Promise((resolve, reject) => {
            const url = this.BASE_URL+"recipes/autocomplete?apiKey=" + apiKey + "&number=10&query="+query;
            fetch(url)
                .then(value => value.json())
                .then(data => resolve(data.map(el => el.title)))
                .catch(reason => reject(reason))
        });
    }

    /**
     * Fonction qui retourne 3 recettes aléatoires
     * @return {Promise<unknown>} Les trois recettes
     */
    static getRandomRecipes() {
        return new Promise((resolve, reject) => {
            const url = this.BASE_URL+"recipes/random?apiKey="+apiKey+"&number=3";
            fetch(url)
                .then(value => value.json())
                .then(data => resolve(data.recipes))
                .catch(reason => reject(reason));
        });
    }


}

export default SearchAPI;