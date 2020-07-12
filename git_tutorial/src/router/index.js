import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'



import Intro from '../views/Contents/Intro.vue'
import Init from '../views/Contents/Init/Init.vue'
import Add from '../views/Contents/Add/Add.vue'
import Commit from '../views/Contents/Commit/Commit.vue'
import Push from '../views/Contents/Push/Push.vue'
import Pull from '../views/Contents/Pull/Pull.vue'
import Clone from '../views/Contents/Clone/Clone.vue'
import Branch from '../views/Contents/Branch/Branch.vue'





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
        path: '/intro',
        name: 'Intro',
        component: Intro
    
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
        path: '/branch',
        name: 'Branch',
        component: Branch
    
      },
      {
        path: '/clone',
        name: 'Clone',
        component: Clone
    
      },
      {
        path: '/pull',
        name: 'Pull',
        component: Pull
    
      },
      {
        path: '/push',
        name: 'Push',
        component: Push
    
      },
      {
        path: '/commit',
        name: 'Commit',
        component: Commit
    
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
