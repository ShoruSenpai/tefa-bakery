<template>
  <nav
    ref="navbar"
    class="navbar fixed flex bg-primary-navbar py-4 shadow-[0_2px_8px_rgba(0,0,0,0.05)] border-b border-tertiary-border w-full z-999"
  >
    <div class="flex items-center justify-between px-26 w-full">
      <RouterLink to="/" class="flex items-center gap-2">
        <img class="h-8" src="/assets/images/tefa_logo.webp" alt="Tefa Logo" />
        <h1 class="text-xl font-bold text-primary">Tefa Bakery & Coffee</h1>
      </RouterLink>
      <div class="flex items-center text-primary text-md font-medium gap-x-8">
        <RouterLink to="/" active-class="nav-active" class="underline-hover">Beranda</RouterLink>
        <RouterLink to="/Tentang-Kami" active-class="nav-active" class="underline-hover"
          >Tentang</RouterLink
        >
        <RouterLink to="/Produk" active-class="nav-active" class="underline-hover"
          >Produk</RouterLink
        >
        <RouterLink to="/Galeri" active-class="nav-active" class="underline-hover"
          >Galeri</RouterLink
        >
        <RouterLink to="/Kontak" active-class="nav-active" class="underline-hover"
          >Kontak</RouterLink
        >
      </div>
      <div>
        <img class="h-8" src="/assets/images/polije-side-logo.webp" alt="polije-side-logo" />
      </div>
    </div>
  </nav>
</template>
