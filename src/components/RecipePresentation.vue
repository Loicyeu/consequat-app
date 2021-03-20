<template>
  <div>
    <div class="d-flex mb-4">
      <h1>{{ this.recipe.title }}</h1>
      <small>#{{ this.recipe.id }}</small>
    </div>

    <div class="d-flex">
      <img :src="this.recipe.image" alt="Recipe image" class="mr-4 mb-4 rounded">
      <ul class="list-unstyled container-fluid">
        <li class="mb-3">
          <img class="mr-2" v-if="recipe.sustainable" src="@/assets/sustainable.svg" alt="" width="64" title="Durable">
          <img class="mr-2" v-if="recipe.vegetarian" src="@/assets/vegetarian.svg" alt="" width="64" title="Végétarien">
          <img class="mr-2" v-if="recipe.vegan" src="@/assets/vegan.svg" alt="" width="64" title="Végan">
          <img class="mr-2" v-if="recipe.glutenFree" src="@/assets/gluten-free.svg" alt="" width="64"
               title="Sans gluten">
          <img class="mr-2" v-if="recipe.dairyFree" src="@/assets/dairy.svg" alt="" width="64"
               title="Sans produits laitiers">
        </li>
        <li>
          <i class="fas fa-utensils"></i> {{ this.recipe.servings }} personnes
        </li>
        <li class="mb-3">
          <i class="far fa-clock"></i> {{ recipe.readyInMinutes }} minutes
        </li>
        <li class="mb-3">
          <h6>Ingrédients :</h6>
          <ul>
            <li class="row" v-for="ing in this.recipe.ingredients" :key="ing.id">
              <div class="col-8">
                {{ ing.name }}
              </div>
              <div class="col-4">
                {{ ing.measures["metric"].amount + " " + ing.measures["metric"].unitShort }}
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="mt-3 pb-4">
      <h3>Résumé de la recette</h3>
      <p v-html="this.recipe.summary"></p>
    </div>
    <div class="pb-4">
      <h3>Score de santé</h3>
      <div class="progress">
        <div class="progress-bar" :class="this.progressBarStyle" role="progressbar"
             :style="'width: '+this.recipe.healthScore+'%;'" :aria-valuenow="this.recipe.healthScore" aria-valuemin="0"
             aria-valuemax="100">
          {{ this.recipe.healthScore }}%
        </div>
      </div>
    </div>
    <div class="pb-4" v-if="this.recipe.winePairing !== void 0 && recipe.winePairing.pairingText !== void 0">
      <h3>Conseil sur le vin</h3>
      <ul>
        <li v-for="wine in recipe.winePairing.pairedWines" :key="wine">{{ wine }}</li>
      </ul>
      <p v-html="this.recipe.winePairing.pairingText"></p>
    </div>

  </div>
</template>

<script>
export default {
  name: "RecipePresentation",
  data() {
    return {
      recipe: this.$store.state.recipe
    }
  },
  computed: {
    progressBarStyle() {
      return {
        "bg-success": this.recipe.healthScore >= 50,
        "bg-warning": this.recipe.healthScore >= 25 && this.recipe.healthScore < 50,
        "bg-danger": this.recipe.healthScore < 25
      }
    }
  },
  mounted() {
    console.log(this.recipe);
  }
}
</script>

<style scoped>

</style>