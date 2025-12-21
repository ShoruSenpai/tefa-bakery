<template>
  <div
    class="min-h-screen w-screen flex flex-col font-[poppins] bg-linear-to-b from-grad-top to-grad-bottom cursor-default"
  >
    <NavbarElement />
    <!-- navbar spacer -->
    <div v-if="showSpacer" :style="{ height: navbarHeight + 'px' }"></div>

    <div class="min-h-screen w-screen">
      <RouterView />
    </div>
    <FooterElement />
  </div>
</template>

<script setup>
import AOS from 'aos'
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const navbarHeight = ref(0)
const showSpacer = ref(true)

// navbar & footer setup
import NavbarElement from '@/components/NavbarElement.vue'
import FooterElement from '@/components/FooterElement.vue'

const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY < 10
}

function updateNavbarHeight() {
  const navbar = document.querySelector('.navbar')
  if (navbar) {
    navbarHeight.value = navbar.offsetHeight
  }
}

watch(
  () => route.meta.fullscreen,
  (val) => {
    showSpacer.value = !val
  },
  { immediate: true },
)

onMounted(() => {
  updateNavbarHeight()

  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', updateNavbarHeight)

  AOS.init({
    once: false,
    mirror: true,
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
