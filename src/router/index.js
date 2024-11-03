import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('@/views/FAQ/index.vue'),
    meta: {
      title: 'FAQ'
    }
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component: () => import('@/views/Kontak/index.vue'),
    meta: {
      title: 'Kontak'
    }
  },
  {
    path: '/portofolio',
    name: 'Portofolio',
    component: () => import('@/views/Portofolio/index.vue'),
    meta: {
      title: 'Portofolio'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
