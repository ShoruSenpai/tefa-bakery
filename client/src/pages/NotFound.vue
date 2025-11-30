<template>
  <div class="w-full h-screen flex flex-col items-center justify-center text-primary px-6">
    <img src="/assets/images/tefa_logo.webp" alt="404" class="h-20 mb-6 opacity-80" />

    <h1 class="text-5xl font-bold mb-4">404</h1>
    <p class="text-lg text-primary/80 text-center max-w-md leading-relaxed">
      Ups… halaman yang kamu cari nggak ketemu.<br />
      Mungkin URL-nya salah atau halamannya belum tersedia.
    </p>

    <RouterLink
      to="/"
      class="mt-8 bg-primary-container text-on-primary py-3 px-6 rounded-full shadow hover:opacity-90 transition"
    >
      Kembali ke Beranda
    </RouterLink>
  </div>
</template>
