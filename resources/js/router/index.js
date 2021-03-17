import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/auth/Login.vue'
import Dashboard from '../components/dashboard/Dashboard.vue'
import Posts from '../components/posts/Posts.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login, name: 'Login' },
    { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
    { path: '/posts', component: Posts, name: 'Posts' }
  ]
})

export default router
