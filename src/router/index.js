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
    },
    {
      path: '/sidestory',
      name: 'SideStory',
      component: () => import('../LEVEL-SideStory/index.vue')
    },
    {
      path: '/sidestory/:storyId',
      name: 'StoryReader',
      component: () => import('../LEVEL-SideStory/StoryTemplate.vue')
    },
    {
      path: '/sidestory/:storyId/:chapterIndex',
      name: 'ChapterReader',
      component: () => import('../LEVEL-SideStory/StoryTemplate.vue')
    },
    {
      path: '/demo-entry',
      name: 'DemoEntry',
      component: () => import('../LEVEL-SideStory/DemoEntry.vue')
    }
  ]
})

export default router