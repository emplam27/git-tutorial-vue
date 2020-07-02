import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import Init from '../views/Init.vue'
import Add from '../views/Add.vue'
import Commit from '../views/Commit.vue'
import Push from '../views/Push.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Test',
    name: 'Test',
    component: Test
  },
  {
    path: '/init',
    name: 'Init',
    component: Init
  },
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/commit',
    name: 'Commit',
    component: Commit
  },
  {
    path: '/push',
    name: 'Push',
    component: Push
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
