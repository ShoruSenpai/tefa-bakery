<template>
  <footer
    class="bg-secondary cursor-default text-primary border-t border-tertiary-border font-[poppins]"
  >
    <!-- hero footer -->
    <div class="flex flex-col items-center">
      <!-- hero banner -->
      <div class="flex justify-center items-center mt-18 px-12 gap-34">
        <!-- left section -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-4">
            <img
              class="h-10 w-auto shadow-sm rounded-full"
              src="/assets/images/tefa_logo.webp"
              alt=""
            />
            <h1 class="text-2xl font-bold">Tefa Bakery & Coffee</h1>
          </div>

          <p class="leading-relaxed font-light max-w">
            Membangun inovasi bakery bersama generasi<br />muda dengan kualitas terbaik
          </p>
        </div>

        <!-- right section -->
        <div class="flex gap-24">
          <div class="flex flex-col gap-2">
            <h1 class="text-md font-semibold">Tautan Cepat</h1>
            <div class="flex flex-col font-light text-sm">
              <RouterLink class="hover:text-primary/50" to="/">Beranda</RouterLink>
              <RouterLink class="hover:text-primary/50" to="/Tentang-Kami">Tentang</RouterLink>
              <RouterLink class="hover:text-primary/50" to="/Produk">Produk</RouterLink>
              <RouterLink class="hover:text-primary/50" to="/Galeri">Galeri</RouterLink>
              <RouterLink class="hover:text-primary/50" to="/Kontak">Kontak</RouterLink>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h1 class="text-md font-semibold">Jam Operasional</h1>
            <div class="flex font-light text-sm">
              <div class="flex flex-col">
                <p>Senin - Jumat</p>
                <p>Sabtu - Minggu</p>
              </div>
              <div class="flex flex-col">
                <p>08.00 - 16.00 WIB</p>
                <p>Tutup</p>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h1 class="text-md font-semibold">Tautan Cepat</h1>
            <div class="flex flex-col gap-1">
              <p class="font-light text-sm">
                Jl. Tawang Mangu No. 68,<br />Pintu Masuk Belakang Polije
              </p>
              <div class="flex gap-4">
                <a
                  class="flex items-center justify-center bg-primary-container p-2 text-on-primary rounded-full aspect-square"
                  href=""
                >
                  <font-awesome-icon class="fa-sm" :icon="['fab', 'instagram']" />
                </a>
                <a
                  class="flex items-center justify-center bg-primary-container p-2 text-on-primary rounded-full aspect-square"
                  href=""
                >
                  <font-awesome-icon class="fa-sm" :icon="['fab', 'tiktok']" />
                </a>
                <a
                  class="flex items-center justify-center bg-primary-container p-2 text-on-primary rounded-full aspect-square"
                  href=""
                >
                  <font-awesome-icon class="fa-sm" :icon="['fab', 'facebook']" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 px-24 w-full text-center">
        <h1 class="text-sm font-light border-t border-primary/30 py-6">
          &copy; {{ currentYear }} Tefa Bakery & Coffee. All Rights Reserved
        </h1>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear())
</script>
