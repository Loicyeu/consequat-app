"use strict";

class RecipeIngredient {

    id;
    aisle;
    amount;
    image;
    measures;
    name;


    /**
     *
     * @param ing {Object}
     *
     * @param ing.id {Number}
     * @param ing.aisle {String}
     * @param ing.amount {Number}
     * @param ing.image {String}
     * @param ing.measures {Array}
     * @param ing.name {String}
     */
    constructor(ing) {
        Object.assign(this, ing)
    }


}

export default RecipeIngredient;