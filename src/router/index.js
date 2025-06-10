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
  },
  {
    path: '/layanan',
    name: 'Layanan',
    component: () => import('@/views/Layanan/index.vue'),
    meta: {
      title: 'Layanan'
    }
  },
  {
    path: '/condition',
    name: 'Condition',
    component: () => import('@/views/Condition/index.vue'),
    meta: {
      title: 'Condition'
    }
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: () => import('@/views/Privacy/index.vue'),
    meta: {
      title: 'Privacy'
    }
  },
  {
    path: '/refund',
    name: 'Refund',
    component: () => import('@/views/Refund/index.vue'),
    meta: {
      title: 'Refund'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
