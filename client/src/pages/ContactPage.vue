<template>
  <div class="font-[quicksand] text-primary">
    <!-- text banner -->
    <section>
      <div class="flex flex-col gap-6 items-center mt-12">
        <h1 class="font-semibold text-5xl">Kontak</h1>
        <p class="text-md font-normal max-w-2xl text-center">
          Kami siap melayani Anda! Kunjungi toko kami atau hubungi untuk pemesanan dan informasi
          lebih lanjut.
        </p>
      </div>
    </section>

    <!-- contact banner -->
    <section class="flex justify-center items-center py-24">
      <div class="grid grid-cols-2 gap-8">
        <!-- left banner -->
        <div class="grid grid-cols-2 gap-8">
          <!-- grid 1 -->
          <div
            class="flex flex-col justify-between bg-on-primary p-6 h-62 shadow-smooth rounded-2xl w-2xs border border-tertiary-border transition duration-300 ease-out hover:shadow-banner"
          >
            <!-- main wrapper -->
            <div class="flex flex-col gap-4 items-start">
              <!-- icon -->
              <div class="bg-secondary p-2 rounded-xl">
                <font-awesome-icon class="fa-xl text-primary/80" :icon="['fab', 'instagram']" />
              </div>
              <!-- text-wrapper -->
              <div class="flex flex-col gap-2">
                <!-- text banner -->
                <h1 class="text-xl font-semibold">Instagram</h1>
                <!-- paragrapgh banner -->
                <div class="flex flex-col ml-2">
                  <p class="text-md text-primary/80"><a href="">@tefasippolije</a></p>
                </div>
              </div>
            </div>
            <!-- link -->
            <a
              href=""
              class="text-md text-primary/70 transition duration-300 ease-out hover:text-primary"
              >Kunjungi ➡</a
            >
          </div>

          <!-- grid 2 -->
          <div
            class="flex flex-col justify-between bg-on-primary p-6 h-62 shadow-smooth rounded-2xl w-2xs border border-tertiary-border transition duration-300 ease-out hover:shadow-banner"
          >
            <!-- main wrapper -->
            <div class="flex flex-col gap-4 items-start">
              <!-- icon -->
              <div class="bg-secondary p-2 rounded-xl">
                <font-awesome-icon class="fa-xl text-primary/80" icon="fa-regular fa-clock" />
              </div>
              <!-- text-wrapper -->
              <div class="flex flex-col gap-2">
                <!-- text banner -->
                <h1 class="text-xl font-semibold">Jam Operasional</h1>
                <!-- paragrapgh banner -->
                <div class="flex flex-col ml-2">
                  <p class="text-md text-primary/80">Senin - Sabtu:</p>
                  <p class="text-md text-primary/80">08.00 - 17.00 WIB</p>
                </div>
              </div>
            </div>
            <!-- link -->
            <a
              href=""
              class="text-md text-primary/70 transition duration-300 ease-out hover:text-primary"
              >Lihat Detail ➡</a
            >
          </div>

          <!-- grid 3 -->
          <div
            class="flex flex-col justify-between bg-on-primary p-6 h-62 shadow-smooth rounded-2xl w-2xs border border-tertiary-border transition duration-300 ease-out hover:shadow-banner"
          >
            <!-- main wrapper -->
            <div class="flex flex-col gap-4 items-start">
              <!-- icon -->
              <div class="bg-secondary p-2 rounded-xl">
                <font-awesome-icon class="fa-xl text-primary/80" icon="fa-regular fa-envelope" />
              </div>
              <!-- text-wrapper -->
              <div class="flex flex-col gap-2">
                <!-- text banner -->
                <h1 class="text-xl font-semibold">Email</h1>
                <!-- paragrapgh banner -->
                <div class="flex flex-col ml-2">
                  <p class="text-md text-primary/80">info@tefabakery.com</p>
                </div>
              </div>
            </div>
            <!-- link -->
            <a
              href=""
              class="text-md text-primary/70 transition duration-300 ease-out hover:text-primary"
              >Kirim Email ➡</a
            >
          </div>

          <!-- grid 4 -->
          <div
            class="flex flex-col justify-between bg-on-primary p-6 h-62 shadow-smooth rounded-2xl w-2xs border border-tertiary-border transition duration-300 ease-out hover:shadow-banner"
          >
            <!-- main wrapper -->
            <div class="flex flex-col gap-4 items-start">
              <!-- icon -->
              <div class="bg-secondary p-2 rounded-xl">
                <font-awesome-icon class="fa-xl text-primary/80" :icon="['fab', 'whatsapp']" />
              </div>
              <!-- text-wrapper -->
              <div class="flex flex-col gap-2">
                <!-- text banner -->
                <h1 class="text-xl font-semibold">whatsapp</h1>
                <!-- paragrapgh banner -->
                <div class="flex flex-col ml-2">
                  <p class="text-md text-primary/80">+62 812-3456-7890</p>
                </div>
              </div>
            </div>
            <!-- link -->
            <a
              href=""
              class="text-md text-primary/70 transition duration-300 ease-out hover:text-primary"
              >Hubungi ➡</a
            >
          </div>

          <!-- grid 5 -->
          <div
            class="col-span-2 flex flex-col justify-between bg-on-primary p-6 h-full shadow-smooth rounded-2xl border border-tertiary-border transition duration-300 ease-out hover:shadow-banner"
          >
            <!-- main wrapper -->
            <div class="flex flex-col gap-4 items-start">
              <!-- header wrapper -->
              <div class="flex items-center gap-4">
                <!-- icon -->
                <div class="flex gap-2 bg-secondary p-2 rounded-xl">
                  <font-awesome-icon class="fa-xl text-primary/80" icon="location-dot" />
                </div>
                <h1 class="text-2xl font-semibold">Peta Lokasi</h1>
              </div>
              <!-- text-wrapper -->
              <p class="text-md text-primary/80">
                Jl. Tawang Mangu No. 68, Politeknik Negeri Jember
              </p>
              <!-- maps  -->
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1766321991248!6m8!1m7!1soepfzO48OeuKkdLheCGI3g!2m2!1d-8.155466161177152!2d113.7271802034874!3f330.86588839687386!4f-4.600062502186333!5f0.7820865974627469"
                class="w-full h-98"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <!-- right banner -->
        <div
          class="flex flex-col bg-on-primary rounded-2xl shadow-smooth p-6 gap-6 border border-tertiary-border transition duration-300 ease-out hover:shadow-banner"
        >
          <h1 class="text-3xl font-semibold">Kirim Pesan</h1>
          <!-- form wrapper -->
          <div class="grid grid-cols-2 gap-6">
            <!-- form name -->
            <div class="col-span-1 flex flex-col gap-2">
              <h4 class="text-md font-medium">Nama</h4>
              <input
                type="text"
                class="bg-secondary/60 p-2 text-sm rounded-lg border border-primary-border/40 transition duration-300 ease-out hover:border hover:border-primary-border/60 focus:outline-none focus:ring-0 focus:border-primary-border/80 focus:shadow-input-focus"
                placeholder="Nama Anda"
              />
            </div>
            <!-- form email -->
            <div class="col-span-1 flex flex-col gap-2">
              <h4 class="text-md font-medium">Email</h4>
              <input
                type="email"
                class="bg-secondary/60 p-2 text-sm rounded-lg border border-primary-border/40 transition duration-300 ease-out hover:border hover:border-primary-border/60 focus:outline-none focus:ring-0 focus:border-primary-border/80 focus:shadow-input-focus"
                placeholder="emailname@example.com"
              />
            </div>
            <!-- form message -->
            <div class="col-span-2 flex flex-col gap-2">
              <h4 class="text-md font-medium">Pesan</h4>
              <textarea
                type="email"
                class="resize-none h-48 bg-secondary/60 py-1 px-2 text-sm rounded-lg border border-primary-border/40 transition duration-300 ease-out hover:border hover:border-primary-border/60 focus:outline-none focus:ring-0 focus:border-primary-border/80 focus:shadow-input-focus"
                placeholder="Tulis pesan anda..."
              ></textarea>
            </div>

            <!-- submit btn -->
            <button
              type="submit"
              class="col-span-2 rounded-2xl text-md text-on-primary font-semibold bg-primary/80 border border-primary-border p-4 shadow-card transition duration-300 ease-out hover:shadow-banner"
            >
              <font-awesome-icon icon="fa-regular fa-paper-plane" />
              Kirim Pesan
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
