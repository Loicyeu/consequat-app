<!--Vue présentant une recette en détail-->

<template>
  <div>
    <GeneralNavbar/>
    <div class="container bg-light">
      <RecipePresentation v-if="Object.keys(this.$store.state.recipe).length>0"/>
      <div v-else-if="error!==null">
        <p>{{ this.error }}</p>
      </div>
      <div v-else class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import SearchAPI from "@/models/SearchAPI";
import RecipePresentation from "@/components/RecipePresentation";
import GeneralNavbar from "@/components/GeneralNavbar";

export default {
  name: "ReceipeDetails",
  components: {
    RecipePresentation,
    GeneralNavbar,
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
    SearchAPI.getRecipeInformation(Number(this.$route.params.id)).then(recipe => {
      console.log(recipe)
      this.$store.commit("setRecipe", recipe);
    }).catch(reason => {
      console.log(reason)
      //FIXME: patch errors thrown by Recipe
      this.error = reason;
    });
  }
}
</script>

<style scoped>

</style>