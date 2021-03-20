<!--Bar de recherche pour les recettes avec autocomplétion "maison".-->
<!--Autocomplétion réaliser grace au CDN Bootstrap-->

<template>
  <div>
    <input id="querySearch" class="form-control bg-dark text-light" type="search"
           placeholder="Rechercher parmi plus de 5 000 recettes"
           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" autocomplete="off"
           aria-label="Search" v-model="searchInput" @keydown="onKeyPressed" @focus="openAutocomplete = true"
           @focusout="focusOut">

    <div class="dropdown-menu" :class="{'show': openAutocomplete && autocompletes.length>0}"
         aria-labelledby="querySearch"
         v-if="autocompletes.length > 0">
      <a class="dropdown-item" v-for="complete in autocompletes" :key="complete"
         @click="setComplete(complete)">{{ complete }}</a>
    </div>
  </div>

</template>

<script>
import SearchAPI from "@/models/SearchAPI";

export default {
  name: "SearchBar",
  data: function () {
    return {
      searchInput: "",
      autocompletes: [],
      openAutocomplete: false,
    }
  },
  methods: {
    onKeyPressed: function () {
      this.$emit('updateSearchInput', this.searchInput);
      if (this.searchInput.length > 2) {
        SearchAPI.getAutocomplete(this.searchInput).then(values => {
          this.autocompletes = values;
        });
      } else {
        this.autocompletes = [];
      }
    },
    setComplete: function (complete) {
      this.searchInput = complete
      this.onKeyPressed();
    },
    focusOut: function () {
      setTimeout(() => this.openAutocomplete = false, 100)
    }
  }
}
</script>

<style scoped>
div {
  min-width: 30vw;
}

.dropdown-menu {
  left: initial !important;
  margin-top: -0.5rem;
}
</style>