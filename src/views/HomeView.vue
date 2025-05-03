<script setup>
import Contact from '@/components/resume blocks/TheContact.vue';
import TechStack from '@/components/resume blocks/techStack/TheTechStack.vue';
import Languages from '@/components/resume blocks/TheLanguages.vue';
import Photo from '@/components/resume blocks/ThePhoto.vue';
</script>

<template>
  <main
    class="flex flex-col overflow-visible bg-base-200 md:bg-base-300 lg:flex-row lg:overflow-hidden"
  >
    <!-- Left Panel -->
    <aside class="flex min-w-[350px] flex-col gap-4 p-6 md:flex-row lg:flex-col xl:w-1/4">
      <Photo class="order-1 self-center md:order-2 lg:order-1" />
      <Contact class="order-2 md:order-1 lg:order-2" />
      <Languages class="order-3" />
    </aside>

    <!-- Right Panel: this is the SCROLL CONTAINER with the BG and the GRID -->

    <section class="flex-1 lg:overflow-auto">
      <div
        class="min-h-full bg-base-300 bg-cover bg-center bg-no-repeat bg-blend-overlay dark:bg-blend-soft-light lg:bg-[url('@/assets/cb15.png')]"
      >
        <!-- <img
          src="@/assets/cb01.svg"
          alt="Background"
          class="absolute inset-0 -z-10 h-full w-full max-w-none object-cover opacity-10 bg-blend-exclusion"
        /> -->
        <div
          class="grid grid-cols-[minmax(20px,1fr)_repeat(18,minmax(20px,1fr))_minmax(20px,1fr)] grid-rows-[auto_auto_auto_auto_auto_auto_1fr] items-center pb-1 pt-8"
        >
          <div class="col-span-1 shrink-[2] basis-0"></div>
          <div
            class="col-span-18 col-start-2 row-span-7 row-start-1 grid grid-cols-subgrid grid-rows-subgrid gap-y-5 text-center"
          >
            <h1
              class="col-span-18 row-span-1 mx-auto font-serif text-6xl font-bold text-base-content 2xl:text-8xl"
            >
              Hi, I am a developer!
            </h1>
            <div
              class="col-span-18 row-span-1 mx-auto mb-2 text-center font-mono text-2xl font-bold text-base-content/60 2xl:text-3xl"
            >
              <article class="">
                I design scalable web applications and APIs with modern tools, blending clean design
                with reliable performance.
              </article>
            </div>
            <TechStack
              class="col-span-18 row-span-5 grid grid-cols-subgrid grid-rows-subgrid gap-y-3"
            />
          </div>
          <div class="col-span-1 shrink-[2] basis-0"></div>
        </div>
      </div>
    </section>
    <!-- </div> -->
  </main>
</template>
