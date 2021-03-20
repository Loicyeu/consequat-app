<!--Filtres de la recherche de recettes-->
<!--Possibilité de choisir un régime, un type de plat ou des cuisines ou des intolérances-->

<template>
  <div class="collapse container" id="collapsedFilter">
    <div class="card card-body bg-light border-top-0 rounded-bottom">
      <div class="mb-3 d-flex justify-content-around flex-wrap">
        <div class="mb-3 mr-5">
          <h6>Régime alimentaire :</h6>
          <div class="form-check form-check-inline">
            <label for="diet"></label>
            <select name="diet" id="diet" class="form-control" v-model="selectedDiet" @click="changeSelectedDiet">
              <option :value="diet" v-for="diet in Object.keys(diets)" :key="diet">{{ diets[diet] }}</option>
            </select>
          </div>
        </div>
        <div class="mb-3 mr-5">
          <h6>Type de plat :</h6>
          <div class="form-check form-check-inline">
            <label for="type"></label>
            <select name="type" id="type" class="form-control" v-model="selectedType" @click="changeSelectedType">
              <option :value="type" v-for="type in Object.keys(types)" :key="type">{{ types[type] }}</option>
            </select>
          </div>
        </div>
        <div class="mb-3 mr-5">
          <h6>Cuisine :</h6>
          <div class="form-check form-check-inline">
            <label for="cuisine"></label>
            <select id="cuisine" class="form-control" v-model="selectedCuisine"
                    @click="changeSelectedCuisine" multiple size="5">
              <option :value="cuisine" v-for="cuisine in Object.keys(cuisines)" :key="cuisine">
                {{ cuisines[cuisine] }}
              </option>
            </select>
          </div>
        </div>
        <div class="mb-3 mr-5">
          <h6>Intolérances</h6>
          <label for="intolerances"></label>
          <div class="form-check form-check-inline">
            <select multiple class="form-control pr-5" id="intolerances" size="5" v-model="selectedIntolerances"
                    @click="changeSelectedIntolerances">
              <option v-for="intolerance in Object.keys(intolerances)" :key="intolerance" :value="intolerance">
                {{ intolerances[intolerance] }}
              </option>
            </select>
          </div>
        </div>
      </div>
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
        "gluten%20free": "Sans gluten",
        "ketogenic": "Cétogène",
        "pescetarian": "Pescétarien",
        "paleo": "Paléo",
        "primal": "Primal",
        "whole30": "Whole30"
      },
      selectedDiet: "none",
      types: {
        "none": "Aucun",
        "main20course": "Plat principal",
        "side20dish": "Accompagnement",
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
      cuisines: {
        "African": "Africaine",
        "American": "Américaine",
        "British": "Anglaise",
        "Cajun": "Cadienne",
        "Caribbean": "Antillaise",
        "Chinese": "Chinoise",
        "Eastern%20European": "Européenne de l'est",
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
        "Latin20American": "Latino-Américaine",
        "Mediterranean": "Méditerranéenne",
        "Mexican": "Mexicaine",
        "Middle20Eastern": "Moyen-Oriental",
        "Nordic": "Nordique",
        "Southern": "Méridionale",
        "Spanish": "Espagnole",
        "Thai": "Thaïlandaise",
        "Vietnamese": "Vietnamienne",
      },
      selectedCuisine: [],
      intolerances: {
        "dairy": "Produit laitiers",
        "peanut": "Arachides",
        "soy": "Soja",
        "egg": "Œufs",
        "seafood": "Fruits de mer",
        "sulfite": "Sulfites",
        "gluten": "Gluten",
        "sesame": "Sésame",
        "treeNut": "Noix",
        "grain": "Grains",
        "shellfish": "Coquillages",
        "wheat": "Blé",
      },
      selectedIntolerances: [],
    }
  },
  methods: {
    changeSelectedDiet: function () {
      this.$store.commit("setSelectedDiet", this.selectedDiet);
    },
    changeSelectedType: function () {
      this.$store.commit("setSelectedType", this.selectedType);
    },
    changeSelectedCuisine: function () {
      this.$store.commit("setSelectedCuisine", this.selectedCuisine);
    },
    changeSelectedIntolerances: function () {
      this.$store.commit("setSelectedIntolerances", this.selectedIntolerances);
    }
  }
}
</script>

<style scoped>

</style>