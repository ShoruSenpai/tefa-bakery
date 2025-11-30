import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/HomePage.vue'),
    meta: { title: 'Tefa Bakery | Home' },
  },
  {
    path: '/Tentang-Kami',
    component: () => import('../pages/AboutPage.vue'),
    meta: { title: 'Tefa Bakery | Tentang Kami' },
  },
  // under construction
  {
    path: '/Produk',
    component: () => import('../pages/UnderConstruction.vue'),
    meta: { title: 'Tefa Bakery | Pengembangan' },
  },
  {
    path: '/Galeri',
    component: () => import('../pages/GaleryPage.vue'),
    meta: { title: 'Tefa Bakery | Galeri' },
  },
  {
    path: '/Kontak',
    component: () => import('../pages/ContactPage.vue'),
    meta: { title: 'Tefa Bakery | Kontak' },
  },

  // not found route
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../pages/NotFound.vue'),
    meta: { title: 'Tefa Bakery | 404 Not Found' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0,
        behavior: 'smooth',
      }
    }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Tefa Bakery'
})

export default router
