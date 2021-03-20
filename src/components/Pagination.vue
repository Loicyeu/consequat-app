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
        this.$store.state.recipes = data.results;
        this.$store.state.resultData = [];
        for (let i = 0; i < (data.totalResults / 10); i++) {
          this.$store.state.resultData.push({
            page: i,
            requestQuery: this.$store.state.query + "&offset=" + (i * 10),
            selected: data.offset === i * 10,
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