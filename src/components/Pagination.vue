<template>
  <nav aria-label="Navigation">
    <ul class="pagination flex-wrap">
      <li v-if="$store.state.pageFirst" class="page-item">
        <button class="page-link btn rounded-right-0" disabled>Previous</button>
      </li>
      <li v-else class="page-item" v-on:click="changePage($store.state.resultData[0].requestQuery)">
        <button class="page-link btn rounded-right-0">Previous</button>
      </li>

      <PaginationNumber v-for="data in $store.state.resultData" :key="data.page" :page="data.page"
                        :query="data.requestQuery" :selected="data.selected" @changePage="changePage"/>

      <li v-if="$store.state.pageLast" class="page-item">
        <button class="page-link btn rounded-left-0" disabled>Next</button>
      </li>
      <li v-else class="page-item" v-on:click="changePage($store.state.resultData[$store.state.resultData.length].requestQuery)">
        <button class="page-link btn rounded-left-0">Next</button>
      </li>

    </ul>
  </nav>
</template>

<script>
import PaginationNumber from "@/components/PaginationNumber";
import SearchAPI from "@/models/SearchAPI";

export default {
  name: "Pagination",
  components: {
    PaginationNumber
  },
  methods: {
    changePage: function (query) {
      SearchAPI.getRecipeFormQuery(query).then(data => {
        this.$store.commit("setFoundRecipes", data)
      }).catch(reason => {
        this.$store.commit("clearFoundRecipes", reason);
      });
    }
  }
}
</script>

<style scoped>

</style>