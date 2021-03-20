<template>
  <div id="app">
    <Navbar/>
    <NavbarFilter @storeSelectedDiet="storeSelectedDiet" @storeSelectedCuisine="storeSelectedCuisine"
                  @storeSelectedType="storeSelectedType"/>
    <div class="container">
      <div v-if="$store.state.recipes.length>0" class="mt-3 d-flex flex-wrap justify-content-center">
        <RecipeCard class="m-3" v-for="recipe in $store.state.recipes" :key="recipe.id"
                    :recipe-id="recipe.id" :recipe-name="recipe.title" :recipe-image="recipe.image"/>
      </div>
      <div v-else>
        <h1>Aucune recette ne correspond.</h1>
      </div>
      <div v-if="$store.state.recipes.length>0" class="d-flex justify-content-center">
        <Pagination/>
      </div>
    </div>
  </div>
</template>


<script>

import Navbar from "@/components/Navbar";
import RecipeCard from "@/components/RecipeCard";
import Pagination from "@/components/Pagination";
import NavbarFilter from "@/components/NavbarFilter";

export default {
  components: {
    Navbar,
    NavbarFilter,
    RecipeCard,
    Pagination
  },
  methods: {
    storeSelectedDiet: function (diet) {
      this.$store.state.selectedDiet = diet;
    },
    storeSelectedCuisine: function (cuisine) {
      this.$store.state.selectedCuisine = cuisine;
    },
    storeSelectedType: function (type) {
      this.$store.state.selectedType = type;
    }
  }
}
</script>

<style scoped>

</style>