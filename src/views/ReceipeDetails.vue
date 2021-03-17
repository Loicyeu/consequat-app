<template>
  <p>Salut {{$route.params.id}}</p>
</template>

<script>
export default {
  name: "ReceipeDetails",
  props: {
    id: {
      type: Number
    },
  },
  beforeMount() {

  }
}
</script>

<style scoped>

</style>