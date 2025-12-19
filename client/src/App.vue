<template>
  <div
    class="min-h-screen w-screen flex flex-col font-[poppins] bg-linear-to-b from-grad-top to-grad-bottom cursor-default"
  >
    <NavbarElement />
    <div class="min-h-screen w-screen">
      <RouterView />
    </div>
    <FooterElement />
  </div>
</template>

<script setup>
import AOS from 'aos'
import { ref, onMounted, onUnmounted } from 'vue'

// navbar & footer setup
import NavbarElement from '@/components/NavbarElement.vue'
import FooterElement from '@/components/FooterElement.vue'

const isScrolled = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY < 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  AOS.init({
    once: false,
    mirror: true,
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
