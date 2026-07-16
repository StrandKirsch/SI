import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/EntryScroll.vue')
    },
    {
      path: '/level/:id',
      name: 'Level',
      component: () => import('../LEVEL/index.js'),
      props: true
    }
  ]
})

export default router
