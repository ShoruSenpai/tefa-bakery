<template>
  <div v-if="open" class="flex gap-2 absolute inset-0 z-102" @click="$emit('close')">
    <div @click.stop class="bg-on-primary rounded-xl p-6 w-80 space-y-4">
      <button @click="share" class="px-4 py-2 rounded-lg bg-secondary text-sm hover:opacity-80">
        Bagikan
      </button>

      <button @click="copy" class="px-4 py-2 rounded-lg bg-secondary text-sm hover:bg-gray-300">
        Copy Link
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  open: Boolean,
  title: String,
  description: String,
  url: {
    type: String,
    required: true,
  },
})

const share = async () => {
  if (navigator.share) {
    await navigator.share({
      title: props.title,
      text: props.description,
      url: props.url,
    })
  }
}

const copy = async () => {
  await navigator.clipboard.writeText(props.url)
}
</script>
