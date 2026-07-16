import { createRouter, createWebHashHistory } from 'vue-router'   // 改这里

const router = createRouter({
  history: createWebHashHistory(),   // 改为 HashHistory
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