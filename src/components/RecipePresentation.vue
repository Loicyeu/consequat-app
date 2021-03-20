<template>
  <div>
    <div class="d-flex mb-4">
      <h1>{{this.recipe.title}}</h1>
      <small>#{{this.recipe.id}}</small>
    </div>

    <div class="d-flex">
      <img :src="this.recipe.image" alt="Recipe image" class="mr-4 mb-4 rounded">
      <ul class="list-unstyled">
        <li class="mb-3">
          <img class="mr-2" v-if="recipe.sustainable" src="@/assets/sustainable.svg" alt="" width="64" title="Durable">
          <img class="mr-2" v-if="recipe.vegetarian" src="@/assets/vegetarian.svg" alt="" width="64" title="Végétarien">
          <img class="mr-2" v-if="recipe.vegan" src="@/assets/vegan.svg" alt="" width="64" title="Végan">
          <img class="mr-2" v-if="recipe.glutenFree" src="@/assets/gluten-free.svg" alt="" width="64" title="Sans gluten">
          <img class="mr-2" v-if="recipe.dairyFree" src="@/assets/dairy.svg" alt="" width="64" title="Sans produits laitiers">
        </li>
        <li class="mb-3">
          <i class="fas fa-utensils"></i> {{this.recipe.servings}} personnes
        </li>
        <li class="mb-3">
          <h6>Ingrédients :</h6>
          <ul>
            <li class="row" v-for="ing in this.recipe.ingredients" :key="ing.id">
              <div class="col-9">
                {{ing.name}}
              </div>
              <div class="col-3">
                ({{ing.measures["metric"].amount+""+ing.measures["metric"].unitShort}})
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <p></p>

  </div>
</template>

<script>
export default {
  name: "RecipePresentation",
  data() {
    return {
      recipe: this.$store.state.recipe,
    }
  },
  mounted() {
    console.log(this.recipe);
  }
}
</script>

<style scoped>

</style>