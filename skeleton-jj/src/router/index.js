import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Single from '../views/Single.vue'
import Multi from '../views/Multi.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/single',
    name: 'Single',
    component: Single
  },
  {
    path: '/multi',
    name: 'Multi',
    component: Multi
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
