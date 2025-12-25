import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('/src/pages/user/HomePage.vue'),
    meta: { title: 'Tefa Bakery | Home', fullscreen: true },
  },
  {
    name: 'about',
    path: '/Tentang-Kami',
    component: () => import('/src/pages/user/AboutPage.vue'),
    meta: { title: 'Tefa Bakery | Tentang Kami', fullscreen: true },
  },
  // under construction
  {
    name: 'product',
    path: '/Produk',
    component: () => import('/src/pages/UnderConstruction.vue'),
    meta: { title: 'Tefa Bakery | Pengembangan', fullscreen: false },
  },
  // under construction
  {
    name: 'gallery',
    path: '/Galeri',
    component: () => import('/src/pages/user/GalleryPage.vue'),
    meta: { title: 'Tefa Bakery | Galeri', fullscreen: false },
  },
  // under construction
  {
    name: 'contact',
    path: '/Kontak',
    component: () => import('/src/pages/user/ContactPage.vue'),
    meta: { title: 'Tefa Bakery | Kontak', fullscreen: false },
  },

  // not found route
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    component: () => import('/src/pages/NotFound.vue'),
    meta: { title: 'Tefa Bakery | 404 Not Found', fullscreen: true },
  },

  // testing route
  {
    name: 'testing-route',
    path: '/testing-page',
    component: () => import('/src/components/GalleryModal.vue'),
    meta: { title: 'Tefa Bakery | Testing Page', fullscreen: true },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.meta.fullscreen) {
      return { top: 0 }
    }

    return {
      top: 0,
      behavior: 'instant',
    }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Tefa Bakery'
})

export default router
