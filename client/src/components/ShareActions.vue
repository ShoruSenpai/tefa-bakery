<template>
  <div class="flex gap-2">
    <button @click="share" class="px-4 py-2 rounded-lg bg-secondary text-sm hover:opacity-80">
      Bagikan
    </button>

    <button @click="copy" class="px-4 py-2 rounded-lg bg-secondary text-sm hover:bg-gray-300">
      Copy Link
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  desciption: String,
  url: {
    type: String,
    required: true,
  },
})

const share = async () => {
  if (navigator.share) {
    await navigator.share({
      title: props.title,
      text: props.desciption,
      url: props.url,
    })
  }
}

const copy = async () => {
  await navigator.clipboard.writeText(props.url)
}
</script>
