<!--Vue permettant de rechercher une recette-->

<template>
  <div id="app">
    <Navbar/>
    <NavbarFilter/>
    <div class="container mt-3">
      <div v-if="$store.state.recipes.length>0" class="d-flex flex-wrap justify-content-center">
        <RecipeCard class="m-3" v-for="recipe in $store.state.recipes" :key="recipe.id"
                    :recipe-id="recipe.id" :recipe-name="recipe.title" :recipe-image="recipe.image"/>
      </div>
      <div v-else>
        <RandomRecipes/>
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
import RandomRecipes from "@/components/RandomRecipes";

export default {
  components: {
    Navbar,
    NavbarFilter,
    RecipeCard,
    RandomRecipes,
    Pagination
  }
}
</script>

<style scoped>

</style>