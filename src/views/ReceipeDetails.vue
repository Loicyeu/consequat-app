<template>
  <div>
    <Navbar />
    <div class="container bg-light">
      <RecipePresentation v-if="Object.keys(this.$store.state.recipe).length>0" />
      <div v-else-if="error!==null">
        <p>{{this.error}}</p>
      </div>
      <div v-else class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import SearchAPI from "@/models/SearchAPI";
import Recipe from "@/models/Recipe";
import RecipePresentation from "@/components/RecipePresentation";
import Navbar from "@/components/Navbar";

export default {
  name: "ReceipeDetails",
  components: {
    RecipePresentation,
    Navbar
  },
  data: function () {
    return {
      error: null
    }
  },
  props: {
    id: {
      type: Number
    },
  },
  beforeMount() {
    SearchAPI.getRecipeInformation(Number(this.$route.params.id)).then(value => {
      this.$store.state.recipe = new Recipe(value);
    }).catch(reason => {
      //FIXME: patch errors thrown by Recipe
      this.error = reason;
    });
  }
}
</script>

<style scoped>

</style>