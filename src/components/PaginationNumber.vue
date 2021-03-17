<template>
  <li v-if="selected" class="page-item active">
    <button class="page-link btn rounded-0">{{page}}</button>
  </li>
  <li v-else class="page-item">
    <button class="page-link btn rounded-0" v-on:click="changePage(query)">{{page}}</button>
  </li>
</template>

<script>
export default {
  name: "PaginationNumber",
  props: {
    page: {
      type: Number
    },
    query: {
      type: String
    },
    selected: {
      type: Boolean
    }
  },
  methods: {
    changePage: function (query) {
      this.$emit("changePage", query);
    }
  }
}
</script>

<style scoped>

</style>