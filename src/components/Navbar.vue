<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a href="#" class="navbar-brand mr-5" title="Recette en latin">
        <i class="fas fa-utensils"></i>
        Consequat
      </a>
      <div class="d-flex align-items-center">
        <SearchBar class="mr-4"/>
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
      }
      this.searchInput = this.searchInput.replace("&", "")
      this.searchInput = this.searchInput.replace("=", "")
      SearchAPI.findRecipes(this.searchInput, params)
          .then(data => {
            this.$store.state.recipes = data.results;
            this.$store.state.query = data.request;
            this.$store.state.resultData = [];
            for(let i=0; i<(data.totalResults/10); i++) {
              this.$store.state.resultData.push({
                page: i,
                requestQuery: data.request+"&offset="+(i*10),
                selected: data.offset===i*10,
              });
            }
            this.$store.state.pageFirst = data.offset===0;
            this.$store.state.pageLast = data.offset+10>=data.totalResults;
          }).catch(reason => {
            this.$store.state.recipes = [];
            this.$store.state.resultData = {};
            this.$store.state.resultError = reason;
          });
    }
  }
}
</script>

<style scoped>

</style>