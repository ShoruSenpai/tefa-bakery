<template>
  <div class="font-[quicksand] text-primary">
    <!-- Hero -->
    <section>
      <div class="flex min-h-screen min-w-screen text-start">
        <img
          class="w-screen h-screen object-cover contrast-30"
          src="/assets/images/primary-bg.webp"
          alt=""
        />

        <div class="absolute h-screen w-screen inset-0 bg-on-primary/90"></div>

        <!-- main wrapper -->
        <div class="absolute inset-0 flex gap-24 justify-center items-center">
          <!-- paragraph wrapper -->
          <div class="flex flex-col max-w-xl gap-8">
            <div class="flex flex-col gap-6">
              <h1 class="font-semibold text-7xl">Tefa Bakery<br />& Coffee</h1>
              <p class="font-medium text-left text-md">
                Dari Teaching Factory Politeknik Negeri Jember, kami menghadirkan produk bakery dan
                kopi berkualitas tinggi dengan sentuhan cokelat yang menggugah selera
              </p>
            </div>
            <div class="flex justify-start items-center gap-4">
              <RouterLink
                to="/Produk"
                class="border-2 border-primary-container bg-primary-container text-on-primary py-2 px-4 rounded-full font-medium text-md shadow-sm shadow-black/30 hover:bg-primary hover:border-primary hover:text-on-primary hover:shadow-md hover:shadow-black/40 transition-all duration-300"
              >
                Lihat Produk
              </RouterLink>
              <RouterLink
                to="/Kontak"
                class="border-2 border-primary-container text-primary py-2 px-4 rounded-full font-medium text-md hover:bg-primary-container hover:text-on-primary hover:shadow-md hover:shadow-black/30 transition-all duration-300"
              >
                Hubungi Kami
              </RouterLink>
            </div>
          </div>
          <img
            data-aos="fade-left"
            data-aos-duration="900"
            class="w-xl h-98 object-cover object-[30%] brightness-80 overflow-hidden rounded-4xl border-primary-border border shadow-banner"
            src="/assets/images/hero-banner.webp"
            alt="hero"
          />
        </div>
      </div>
    </section>

    <section>
      <div class="flex justify-center items-center py-12 gap-24 mt-24 mb-24">
        <img
          data-aos="fade-right"
          data-aos-duration="900"
          class="w-xl h-98 object-cover object-[37%] brightness-80 overflow-hidden rounded-4xl border-primary-border border shadow-banner"
          src="/assets/images/section-banner.webp"
          alt="Information"
        />
        <div class="flex flex-col gap-12">
          <div class="flex flex-col gap-6">
            <h1 class="text-6xl font-semibold">Berinovasi Bersama<br />Generasi</h1>
            <p class="w-xl font-medium">
              TEFA Bakery hadir sebagi wadah inovasi dan praktik bisnis berbasis sekolah. Kami
              menhadirkan produk berkualitas mulai dari roti, kopi, hingga olahan ikan yang
              diproduksi dengan standar terbaik.
            </p>
          </div>
          <div class="flex items-center justify-center gap-24 font-medium">
            <div class="flex flex-col items-center justify-center">
              <h4 class="text-2xl">26+</h4>
              <p class="text-sm">Years</p>
            </div>
            <div class="flex flex-col items-center justify-center">
              <h4 class="text-2xl">50+</h4>
              <p class="text-sm">Products</p>
            </div>
            <div class="flex flex-col items-center justify-center">
              <h4 class="text-2xl">1000+</h4>
              <p class="text-sm">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="flex flex-col gap-6 py-24">
        <!-- title -->
        <div class="flex flex-col gap-6 items-center justify-center">
          <h1 class="text-5xl font-semibold">Produk Unggulan</h1>
          <p class="text-md font-medium">
            Jelajahi Kategori produk kami yang dibuat fresh setiap hari dengan bahan-bahan
            berkualitas terbaik.
          </p>
        </div>

        <!-- carousel -->
        <div class="relative w-full overflow-hidden">
          <!-- track -->
          <div
            ref="track"
            class="flex items-center justify-center py-12 gap-8 transition-transform duration-500 ease-out"
          >
            <!-- card -->
            <div
              class="card shrink-0 bg-on-primary rounded-2xl shadow-smooth transition duration-300 ease-out hover:-translate-y-1 hover:shadow-banner"
            >
              <!-- image -->
              <div class="w-96 h-64 overflow-hidden rounded-t-2xl">
                <img
                  class="h-full w-full object-cover transition duration-500 hover:scale-105"
                  src="/assets/images/roti-boy.webp"
                  alt="produk"
                />
              </div>
              <!-- product info & price -->
              <div class="flex flex-col px-4 py-8 gap-4">
                <!-- menu wrapper -->
                <div class="flex flex-col gap-2">
                  <h4 class="text-lg font-semibold">Lorem Ipsum Dolor</h4>
                  <p class="text-sm font-medium">Dolor Ipdum Dolor Sit Amet</p>
                </div>
                <div class="flex justify-between">
                  <h4 class="ml-2 text-2xl font-medium">Rp.xxx.xxx,xx</h4>
                  <div
                    class="flex justify-between items-center bg-primary-container py-1 px-2 rounded-full gap-2"
                  >
                    <font-awesome-icon class="fa-xs text-on-primary" icon="eye" />
                    <h6 class="text-on-primary text-sm">Preview</h6>
                  </div>
                </div>
              </div>
            </div>
            <!-- card -->
            <div
              class="card shrink-0 bg-on-primary rounded-2xl shadow-smooth transition duration-300 ease-out hover:-translate-y-1 hover:shadow-banner"
            >
              <!-- image -->
              <div class="w-96 h-64 overflow-hidden rounded-t-2xl">
                <img
                  class="h-full w-full object-cover transition duration-500 hover:scale-105"
                  src="/assets/images/roti-boy.webp"
                  alt="produk"
                />
              </div>
              <!-- product info & price -->
              <div class="flex flex-col px-4 py-8 gap-4">
                <!-- menu wrapper -->
                <div class="flex flex-col gap-2">
                  <h4 class="text-lg font-semibold">Lorem Ipsum Dolor</h4>
                  <p class="text-sm font-medium">Dolor Ipdum Dolor Sit Amet</p>
                </div>
                <div class="flex justify-between">
                  <h4 class="ml-2 text-2xl font-medium">Rp.xxx.xxx,xx</h4>
                  <div
                    class="flex justify-between items-center bg-primary-container py-1 px-2 rounded-full gap-2"
                  >
                    <font-awesome-icon class="fa-xs text-on-primary" icon="eye" />
                    <h6 class="text-on-primary text-sm">Preview</h6>
                  </div>
                </div>
              </div>
            </div>
            <!-- card -->
            <div
              class="card shrink-0 bg-on-primary rounded-2xl shadow-smooth transition duration-300 ease-out hover:-translate-y-1 hover:shadow-banner"
            >
              <!-- image -->
              <div class="w-96 h-64 overflow-hidden rounded-t-2xl">
                <img
                  class="h-full w-full object-cover transition duration-500 hover:scale-105"
                  src="/assets/images/roti-boy.webp"
                  alt="produk"
                />
              </div>
              <!-- product info & price -->
              <div class="flex flex-col px-4 py-8 gap-4">
                <!-- menu wrapper -->
                <div class="flex flex-col gap-2">
                  <h4 class="text-lg font-semibold">Lorem Ipsum Dolor</h4>
                  <p class="text-sm font-medium">Dolor Ipdum Dolor Sit Amet</p>
                </div>
                <div class="flex justify-between">
                  <h4 class="ml-2 text-2xl font-medium">Rp.xxx.xxx,xx</h4>
                  <div
                    class="flex justify-between items-center bg-primary-container py-1 px-2 rounded-full gap-2"
                  >
                    <font-awesome-icon class="fa-xs text-on-primary" icon="eye" />
                    <h6 class="text-on-primary text-sm">Preview</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button @click="handlePrev" class="absolute left-4 top-1/2 -translate-y-1/2">⬅</button>
          <button @click="handleNext" class="absolute right-4 top-1/2 -translate-y-1/2">➡</button>
        </div>
      </div>
    </section>

    <section>
      <div class="flex flex-col py-24 gap-24 bg-[#FAF9F6]">
        <h1 class="font-semibold text-5xl text-center">Kepuasan Pelanggan</h1>

        <!-- card wrapper -->
        <div class="flex gap-12 items-center justify-center">
          <!-- card -->
          <div data-aos="fade-right" data-aos-duration="600" data-aos-offset="100">
            <div
              class="flex flex-col gap-4 bg-[#F5E6D3] px-12 py-8 rounded-2xl shadow-smooth transition duration-300 ease-out hover:-translate-y-1 hover:shadow-banner"
            >
              <!-- stars & comment -->
              <div class="flex flex-col gap-2">
                <!-- stars -->
                <div class="flex">
                  <font-awesome-icon class="fa-xs text-star" icon="star" />
                  <font-awesome-icon class="fa-xs text-star" icon="star" />
                  <font-awesome-icon class="fa-xs text-star" icon="star" />
                  <font-awesome-icon class="fa-xs text-star" icon="star" />
                  <font-awesome-icon class="fa-xs text-star" icon="star" />
                </div>
                <!-- comment -->
                <p class="w-xs italic">"Tempat belajar manajemen kafe & Barista yang tepat"</p>
              </div>
              <!-- line break -->
              <div class="w-full bg-black/60 h-px"></div>
              <!-- customer nickname -->
              <div class="flex flex-col gap-1">
                <!-- nickname -->
                <h1 class="font-semibold text-lg">Donny Agustinus Waluyo</h1>
                <!-- status -->
                <p class="text-md">Pelanggan</p>
              </div>
            </div>
          </div>
          <!-- card -->
          <div data-aos="fade-up" data-aos-duration="600" data-aos-offset="100">
            <div
              class="flex flex-col gap-4 bg-[#F5E6D3] px-12 py-8 rounded-2xl shadow-smooth transition duration-300 ease-out hover:-translate-y-1 hover:shadow-banner"
            >
              <!-- stars & comment -->
              <div class="flex flex-col gap-2">
                <!-- stars -->
                <div class="flex">
                  <font-awesome-icon class="fa-xs text-star" icon="star" />
                  <font-awesome-icon class="fa-xs text-star" icon="star" />
                  <font-awesome-icon class="fa-xs text-star" icon="star" />
                  <font-awesome-icon class="fa-xs text-star" icon="star" />
                  <font-awesome-icon class="fa-xs text-star" icon="star" />
                </div>
                <!-- comment -->
                <p class="w-xs italic">
                  "Roti buatan sendiri dan rasanya enak sekali, mantapp polll. Banyak varian rasa
                  dari yang manis sampe yang asin. Next harus cobain lagiiiiii☺️ "
                </p>
              </div>
              <!-- line break -->
              <div class="w-full bg-black/60 h-px"></div>
              <!-- customer nickname -->
              <div class="flex flex-col gap-1">
                <!-- nickname -->
                <h1 class="font-semibold text-lg">Revindra Putra</h1>
                <!-- status -->
                <p class="text-md">Pelanggan</p>
              </div>
            </div>
          </div>
          <!-- card -->
          <div data-aos="fade-left" data-aos-duration="600" data-aos-offset="100">
            <div
              class="flex flex-col gap-4 bg-[#F5E6D3] px-12 py-8 rounded-2xl shadow-smooth transition duration-300 ease-out hover:-translate-y-1 hover:shadow-banner"
            >
              <!-- stars & comment -->
              <div class="flex flex-col gap-2">
                <!-- stars -->
                <div class="flex">
                  <font-awesome-icon class="fa-xs text-star" icon="star" />
                  <font-awesome-icon class="fa-xs text-star" icon="star" />
                  <font-awesome-icon class="fa-xs text-star" icon="star" />
                  <font-awesome-icon class="fa-xs text-star" icon="star" />
                  <font-awesome-icon class="fa-xs text-star" icon="star" />
                </div>
                <!-- comment -->
                <p class="w-xs italic">"Nice Place .. Disediakan Ruang meeting .. Full AC "</p>
              </div>
              <!-- line break -->
              <div class="w-full bg-black/60 h-px"></div>
              <!-- customer nickname -->
              <div class="flex flex-col gap-1">
                <!-- nickname -->
                <h1 class="font-semibold text-lg">Lagha Ligho</h1>
                <!-- status -->
                <p class="text-md">Pelanggan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const track = ref(null)
const cards = ref([])

let currentIndex = 0
let cardWidth = 0

function updateCarousel() {
  if (!track.value) return

  track.value.style.transform = `translateX(-${currentIndex * cardWidth}px)`
}

function handleNext() {
  if (currentIndex < cards.value.length - 1) {
    currentIndex++
    updateCarousel()
  }
}

function handlePrev() {
  if (currentIndex > 0) {
    currentIndex--
    updateCarousel()
  }
}

onMounted(() => {
  cards.value = track.value.querySelectorAll('.card')
  if (!cards.value.length) return

  cardWidth = cards.value[0].offsetWidth + 32
})

onUnmounted(() => {})
</script>
