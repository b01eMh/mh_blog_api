import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/auth/Login.vue'
import Dashboard from '../components/dashboard/Dashboard.vue'
import Posts from '../components/posts/Posts.vue'
import store from '../store'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login, name: 'Login' },
    { path: '/dashboard', component: Dashboard, name: 'Dashboard', meta: { reqAuth: true } },
    { path: '/', component: Posts, name: 'Home' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.reqAuth)) {
    if (!store.getters.authenticated) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
  
})

export default router
