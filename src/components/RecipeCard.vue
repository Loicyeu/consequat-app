<template>
  <div class="card" style="width: 18rem;">
    <img :src="recipeImage" class="card-img-top" :alt="recipeName">
    <div class="card-body">
      <h5 class="card-title">{{recipeName}}</h5>
      <hr>
      <div class="text-center mt-4">
        <a :href="'/recipe/'+recipeId" class="btn btn-outline-success">Ouvrir la recette</a>
      </div>
    </div>
    <div class="card-footer">
      <small class="text-muted">Recette #{{recipeId}}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    recipeImage: {
      type: String
    },
    recipeName: {
      type: String
    },
    recipeId: {
      type: Number
    }
  }
}
</script>

<style scoped>

</style>