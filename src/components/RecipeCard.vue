<!--Carte présentant une recette lors de la recherche-->
<!--Permet d'avoir le détail par le biais d'un bouton amenant sur une page-->

<template>
  <div class="card" style="width: 18rem;">
    <img :src="recipeImage" class="card-img-top" :alt="recipeName">
    <div class="card-body">
      <h5 class="card-title">{{ recipeName }}</h5>
      <hr>
      <div class="text-center mt-4">
        <router-link class="btn btn-outline-success" :to="'/recipe/'+recipeId">Ouvrir la recette</router-link>
      </div>
    </div>
    <div class="card-footer">
      <small class="text-muted">Recette #{{ recipeId }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    recipeImage: {
      type: String,
      required: true,
    },
    recipeName: {
      type: String,
      required: true,
    },
    recipeId: {
      type: Number,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>