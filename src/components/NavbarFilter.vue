<template>
  <div class="collapse container" id="collapsedFilter">
    <div class="card card-body bg-light border-top-0 rounded-bottom">
      <div class="mb-3 d-flex justify-content-left flex-wrap">
        <div class="mb-3 mr-5">
          <h6>Régime alimentaire :</h6>
          <div class="form-check form-check-inline">
            <label for="diet"></label>
            <select name="diet" id="diet" class="form-control" v-model="selectedDiet" @click="changeSelectedDiet">
              <option :value="diet" v-for="diet in Object.keys(diets)" :key="diet">{{diets[diet]}}</option>
            </select>
          </div>
        </div>
        <div class="mb-3 mr-5">
          <h6>Cuisine :</h6>
          <div class="form-check form-check-inline">
            <label for="cuisine"></label>
            <select name="cuisine" id="cuisine" class="form-control" v-model="selectedCuisine" @click="changeSelectedCuisine">
              <option :value="cuisine" v-for="cuisine in Object.keys(cuisines)" :key="cuisine">{{cuisines[cuisine]}}</option>
            </select>
          </div>
        </div>
        <div class="mb-3 mr-5">
          <h6>Type de plat :</h6>
          <div class="form-check form-check-inline">
            <label for="type"></label>
            <select name="type" id="type" class="form-control" v-model="selectedType" @click="changeSelectedType">
              <option :value="type" v-for="type in Object.keys(types)" :key="type">{{types[type]}}</option>
            </select>
          </div>
        </div>
        <div></div>
      </div>
      <hr>
      <div class="mb-3 px-3">
        <h6>Intolérances :</h6>
        <div class="container d-flex justify-content-between mb-3">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="dairy" id="dairy">
            <label for="dairy" class="form-check-label">Produits&nbsp;laitiers</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="peanut" id="peanut">
            <label for="peanut" class="form-check-label">Arachides</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="soy" id="soy">
            <label for="soy" class="form-check-label">Soja</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="egg" id="egg">
            <label for="egg" class="form-check-label">Œufs</label>
          </div>
        </div>
        <div class="container d-flex justify-content-between mb-3">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="seafood" id="seafood">
            <label for="seafood" class="form-check-label">Fruits&nbsp;de&nbsp;mer</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="sulfite" id="sulfite">
            <label for="sulfite" class="form-check-label">Sulfites</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="gluten" id="gluten">
            <label for="gluten" class="form-check-label">Gluten</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="sesame" id="sesame">
            <label for="sesame" class="form-check-label">Sésame</label>
          </div>
        </div>
        <div class="container d-flex justify-content-between mb-3">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="treeNut" id="treeNut">
            <label for="treeNut" class="form-check-label">Noix</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="grain" id="grain">
            <label for="grain" class="form-check-label">Grains</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="shellfish" id="shellfish">
            <label for="shellfish" class="form-check-label">Coquillages</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" name="wheat" id="wheat">
            <label for="wheat" class="form-check-label">Blé</label>
          </div>
        </div>
      </div>
      <hr>
<!--      //TODO: include, exclude ingredient-->
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarFilter",
  data() {
    return {
      diets: {
        "none": "Aucun",
        "vegetarian": "Végétarisme",
        "lacto-vegetarian": "Lacto-végétarisme",
        "ovo-vegetarian": "Ovo-végétarisme",
        "vegan": "Végétalisme",
        "gluten free": "Sans gluten",
        "ketogenic": "Cétogène",
        "pescetarian": "Pescétarien",
        "paleo": "Paléo",
        "primal": "Primal",
        "whole30": "Whole30"
      },
      selectedDiet: "none",
      cuisines: {
        "none": "Aucun",
        "African": "Africaine",
        "American": "Américaine",
        "British": "Anglaise",
        "Cajun": "Cadienne",
        "Caribbean": "Antillaise",
        "Chinese": "Chinoise",
        "Eastern European": "Européenne de l'est",
        "European": "Européenne",
        "French": "Française",
        "German": "Allemande",
        "Greek": "Grecque",
        "Indian": "Indienne",
        "Irish": "Irlandaise",
        "Italian": "Italienne",
        "Japanese": "Japonaise",
        "Jewish": "Juive",
        "Korean": "Coréenne",
        "Latin American": "Latino-Américaine",
        "Mediterranean": "Méditerranéenne",
        "Mexican": "Mexicaine",
        "Middle Eastern": "Moyen-Oriental",
        "Nordic": "Nordique",
        "Southern": "Méridionale",
        "Spanish": "Espagnole",
        "Thai": "Thaïlandaise",
        "Vietnamese": "Vietnamienne",
      },
      selectedCuisine: "none",
      types: {
        "none": "Aucun",
        "main course": "Plat principal",
        "side dish": "Accompagnement",
        "dessert": "Dessert",
        "appetizer": "Entrée",
        "salad": "Salade",
        "bread": "Pain",
        "breakfast": "Petit-déjeuner",
        "soup": "Soupe",
        "beverage": "Boisson soft",
        "sauce": "Sauce",
        "marinade": "Marinade",
        "fingerfood": "Amuse-gueule",
        "snack": "En-cas",
        "drink": "Boisson",
      },
      selectedType: "none",
    }
  },
  methods: {
    changeSelectedDiet: function () {
      this.$emit("storeSelectedDiet", this.selectedDiet)
    },
    changeSelectedCuisine: function () {
      this.$emit("storeSelectedCuisine", this.selectedCuisine)
    },
    changeSelectedType: function () {
      this.$emit("storeSelectedType", this.selectedType)
    }
  }
}
</script>

<style scoped>

</style>