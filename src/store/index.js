import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//Store permettant l'accès a certaines données par tous les composants.

export default new Vuex.Store({
    state: {
        //ROUTE SearchRecipe
        recipes: [],
        query: "",

        resultData: [],
        pageFirst: true,
        pageLast: true,
        resultError: "",

        selectedDiet: "none",
        selectedType: "none",
        selectedCuisine: [],
        selectedIntolerance: [],

        //ROUTE RecipeDetails
        recipe: {}
    },
    mutations: {
        setSelectedDiet(state, diet) {
            state.selectedDiet = diet;
        },
        setSelectedCuisine(state, cuisine) {
            state.selectedCuisine = cuisine;
        },
        setSelectedType(state, type) {
            state.selectedType = type;
        },
        setSelectedIntolerances(state, intolerances) {
            state.selectedIntolerance = intolerances;
        },
        setFoundRecipes(state, recipes) {
            state.recipes = recipes.results;
            state.resultData = [];
            for (let i = 0; i < (recipes.totalResults / 10); i++) {
                state.resultData.push({
                    page: i,
                    requestQuery: recipes.request + "&offset=" + (i * 10),
                    selected: recipes.offset === i * 10,
                });
            }
            state.pageFirst = recipes.offset === 0;
            state.pageLast = recipes.offset + 10 >= recipes.totalResults;
        },
        clearFoundRecipes(state, error) {
            state.recipes = [];
            state.resultData = {};
            state.resultError = error;
        },
        setQuery(state, request) {
            state.query = request;
        },
        setRecipe(state, recipe) {
            state.recipe = recipe;
        }
    },
    actions: {},
    modules: {}
});
