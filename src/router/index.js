import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchRecipe from "@/views/SearchRecipe";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: SearchRecipe
  },
  {
    path: '/recipe/:id',
    name: 'Recette',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/ReceipeDetails')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
