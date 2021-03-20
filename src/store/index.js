import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
    selectedCuisine: "none",
    selectedType: "none",

    //ROUTE RecipeDetails
    recipe: {}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
