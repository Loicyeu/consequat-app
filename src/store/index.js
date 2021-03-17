import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recipes: [],
    query: "",

    resultData: [],
    pageFirst: true,
    pageLast: true,
    resultError: "",

    selectedDiet: "none",
    selectedCuisine: "none",
    selectedType: "none",
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
