<!--Recettes aléatoire lorsqu'aucune recette n'est trouvé par la recherche-->

<template>
  <div>
    <h2 class="text-light">Nous n'avons trouvé aucune recette...</h2>
    <h5 class="text-light">Mais en voici quelques-unes qui pourraient vous plaire</h5>
    <div class="d-flex justify-content-around mt-5">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id"
                  :recipe-id="recipe.id" :recipe-name="recipe.title" :recipe-image="recipe.image"/>
    </div>
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard";
import SearchAPI from "@/models/SearchAPI";

export default {
  name: "RandomRecipes",
  components: {
    RecipeCard,
  },
  data: function () {
    return {
      recipes: []
    }
  },
  beforeMount() {
    SearchAPI.getRandomRecipes().then(value => {
      this.recipes = value
    });
  }
}
</script>

<style scoped>

</style>