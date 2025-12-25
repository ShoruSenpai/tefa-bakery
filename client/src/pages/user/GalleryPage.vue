<template>
  <div class="font-[quicksand] text-primary">
    <section>
      <div class="h-full min-w-screen flex flex-col container m-auto items-center">
        <!-- heading -->
        <div class="w-full flex flex-col gap-6 mt-12 items-center">
          <h1 class="text-5xl font-semibold">Galeri Kegiatan</h1>
          <p class="text-md font-medium">
            Dokumentasi berbagai aktivitas siswa dalam proses produksi, pelatihan, dan promosi
            produk di TEFA Bakery Polije.
          </p>
        </div>

        <!-- main content -->
        <div class="grid grid-cols-3 auto-rows-[220px] gap-6 grid-flow-dense px-48 py-24">
          <div
            v-for="item in galleries"
            :key="item.id"
            class="cursor-pointer group relative overflow-hidden rounded-xl"
            :class="{
              'row-span-2 min-h-[460px] ': item.layout?.toLowerCase() === 'tall',
            }"
            @click="openModal(item)"
          >
            <img
              :src="item.image"
              alt="gallery image"
              class="h-full rounded-xl w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div
              class="absolute inset-0 bg-white/50 flex items-end py-2 px-4 opacity-0 group-hover:opacity-100 transition duration-500"
            >
              <h3
                class="text-lg font-semibold translate-y-4 group-hover:translate-y-0 transition duration-500"
              >
                {{ item.title }}
              </h3>
            </div>
          </div>
        </div>

        <GalleryModal :open="showModal" :data="selected" @close="showModal = false" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import GalleryModal from '@/components/GalleryModal.vue'

const galleries = ref([])
const showModal = ref(false)
const selected = ref({})

const loadGallery = async () => {
  const res = await fetch('http://localhost:3080/api/gallery')

  galleries.value = await res.json()
}

const openModal = (item) => {
  selected.value = item
  showModal.value = true
}

onMounted(loadGallery)
</script>
