<!--Navbar de la page d'accueil permettant de rechercher une recette ou d'ouvrir les filtres.-->

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a href="#" class="navbar-brand mr-5" title="Recette en latin">
        <i class="fas fa-utensils"></i>
        Consequat
      </a>
      <div class="d-flex align-items-center">
        <SearchBar class="mr-4" @updateSearchInput="updateSearchInput"/>
        <div class="btn-group">
          <button class="btn btn-outline-primary p-2" type="button" data-toggle="collapse"
                  data-target="#collapsedFilter" aria-expanded="false" aria-controls="collapsedFilter">
            <i class="fas fa-filter"></i>
          </button>
          <button class="btn btn-outline-success input-group-append p-2" type="submit" v-on:click="search">
            Rechercher
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

import SearchAPI from "@/models/SearchAPI";
import SearchBar from "@/components/SearchBar";

export default {
  name: "Navbar",
  components: {
    SearchBar
  },
  data() {
    return {
      searchInput: "",
    }
  },
  methods: {
    updateSearchInput: function (searchInput) {
      this.searchInput = searchInput;
    },
    search: function () {
      let params = {
        diet: this.$store.state.selectedDiet,
        type: this.$store.state.selectedType,
        cuisine: this.$store.state.selectedCuisine,
        intolerance: this.$store.state.selectedIntolerance,
      }
      this.searchInput = this.searchInput.replace("&", "")
      this.searchInput = this.searchInput.replace("=", "")
      SearchAPI.findRecipes(this.searchInput, params)
          .then(data => {
            this.$store.commit("setQuery", data.request)
            this.$store.commit("setFoundRecipes", data);
          }).catch(reason => {
        this.$store.commit("clearFoundRecipes", reason);
      });
    }
  }
}
</script>

<style scoped>

</style>