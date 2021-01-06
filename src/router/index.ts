import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component:() => import(/* webpackChunkName: "about" */ '../views/Home/home.vue'),

  },
  {
    path: "/home",
    component:() => import(/* webpackChunkName: "about" */ '../views/Home/home.vue'),
    meta:{
      title: 'Gawsdata'
    }
  },
  {
    path: "/about",
    component:() => import(/* webpackChunkName: "about" */ '../views/About/about.vue'),

  },
  {
    path: "/introduce",
    component:() => import(/* webpackChunkName: "about" */ '../views/Introduce/introduce.vue'),
  },
  {
    path: "/dataset",
    component:() => import(/* webpackChunkName: "about" */ '../views/Dataset/dataset.vue'),
  },
  {
    path: "/help",
    component:() => import(/* webpackChunkName: "about" */ '../views/Help/help.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
