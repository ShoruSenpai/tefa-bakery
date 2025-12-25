<template>
  <div
    v-if="open"
    @click="emit('close')"
    class="fixed inset-0 z-101 flex items-center justify-center bg-black/80"
  >
    <div
      class="bg-on-primary rounded-2xl w-5xl max-w-full h-124 relative flex overflow-hidden border border-primary-border shadow-smooth-white"
      @click.stop
    >
      <button class="absolute top-4 right-6 text-gray-400" @click="emit('close')">✕</button>

      <!-- image -->
      <div
        class="w-2/3 p-6 bg-secondary/30 flex justify-center items-center border-r border-primary-border/20"
      >
        <img
          :src="data.image"
          alt="gallery modal"
          class="rounded-xl max-h-full max-w-full object-contain shadow-banner"
        />
      </div>

      <!-- detail -->
      <div class="w-1/3 p-8 pb-24 space-y-4 flex flex-col gap-4 overflow-y-auto">
        <h1
          class="text-sm font-medium bg-secondary/80 px-5 py-2 rounded-full text-center w-auto self-start border border-tertiary-border"
        >
          Detail Gambar
        </h1>
        <!-- title & description -->
        <div class="flex flex-col gap-4">
          <h2 class="font-bold text-2xl">{{ data.title }}</h2>
          <p class="font-medium text-sm leading-tight">{{ data.description }}</p>
        </div>
        <!-- detail date -->
        <div class="flex gap-2 items-start border-b border-primary-border/20 pb-4">
          <font-awesome-icon class="text-lg mt-1" icon="calendar" />
          <div class="flex flex-col gap-2">
            <h3 class="text-md font-semibold">Tanggal</h3>
            <p class="text-sm font-medium">{{ formatedDate }}</p>
          </div>
        </div>
        <!-- detail location -->
        <div class="flex gap-2 items-start border-b border-primary-border/20 pb-4">
          <font-awesome-icon class="text-lg mt-1" icon="location-dot" />
          <div class="flex flex-col gap-2">
            <h3 class="text-md font-semibold">Lokasi</h3>
            <p class="text-sm font-medium">{{ data.location }}</p>
          </div>
        </div>

        <button
          class="absolute bottom-5 right-6 flex items-center bg-primary/90 text-on-primary self-end py-2 px-4 gap-2 rounded-full hover:bg-primary transition duration-500 shadow-card"
        >
          <font-awesome-icon class="text-sm" icon="share-nodes" />
          <h3 class="text-sm">Bagikan</h3>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import ShareActions from './ShareActions.vue'

const props = defineProps({
  open: Boolean,
  data: Object,
})

const emit = defineEmits(['close'])

const handleEsc = (e) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

const formatedDate = computed(() => {
  if (!props.data?.activity_date) return '-'

  return new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(new Date(props.data.activity_date))
})

onMounted(() => {
  window.addEventListener('keydown', handleEsc)
})

onUnmounted(() => [window.removeEventListener('keydown', handleEsc)])
</script>
