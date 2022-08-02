import { createRouter, createWebHistory } from 'vue-router'
import User from '../views/UserListView.vue'
import Navbar from '../views/Navbar/Navbar.vue';

const routes = [
  {
    path: '/',
    component: () => Navbar,
    children : [
      {
        path: '/users',
        name: 'home',
        component: User
      },
      {
        path: '/messages',
        name: 'about',
        component: () => import('../views/MessageListView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
