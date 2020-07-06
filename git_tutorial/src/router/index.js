import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'



import Intro from '../views/Contents/Intro.vue'
import Init from '../views/Contents/Init/Init.vue'




Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children : [
      {
        path: '/init',
        name: 'Init',
        component: Init
    
      },
      {
        path: '/intro',
        name: 'Intro',
        component: Intro
    
      },
    ]

  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
