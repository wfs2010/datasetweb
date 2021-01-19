import { createRouter, createWebHistory } from 'vue-router'

// : Array<RouteRecordRaw>
const routes = [
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
    path: "/dataset",
    component:() => import(/* webpackChunkName: "about" */ '../views/Dataset/index.vue'),
  },
  {
    path: "/login",
    component:() => import(/* webpackChunkName: "about" */ '../views/Login/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
router.afterEach(() => {
    window.scrollTo(0, 0);
})
export default router
