<script setup>
// import About from '@/components/resume blocks/TheAbout.vue';
import Contact from '@/components/resume blocks/TheContact.vue';
// import Skills from '@/components/resume blocks/TheSkills.vue';
import TechStack from '@/components/resume blocks/techStack/TheTechStack.vue';
import Languages from '@/components/resume blocks/TheLanguages.vue';
// import Practices from '@/components/resume blocks/ThePractices.vue';
import Photo from '@/components/resume blocks/ThePhoto.vue';
</script>

<template>
  <main class="flex h-full flex-col overflow-auto md:flex-row md:overflow-hidden">
    <!-- Left Panel -->
    <aside class="flex w-full flex-col gap-4 p-6 md:w-1/4">
      <!--Resume blocks support next attributes: -->
      <!-- titleStyle?: ribbon | default -->
      <!-- size: full | everything else? -->
      <!-- position: everything else? | left -->
      <Photo class="self-center" />
      <Contact position="left" size="full" titleStyle="ribbon" />
      <Languages position="left" size="full" titleStyle="ribbon" />
    </aside>

    <!-- Right Panel -->
    <section
      class="relative grid h-full min-h-full grid-cols-12 grid-rows-[auto_auto_auto_auto_auto_auto_1fr] items-center pb-1 pt-8 md:w-3/4 md:overflow-auto"
    >
      <img
        src="@/assets/cb01.svg"
        alt="Background"
        class="absolute inset-0 -z-10 h-full w-full bg-secondary object-cover opacity-10 bg-blend-exclusion"
      />
      <!-- <div class="col-span-1"></div> -->
      <div
        class="col-span-10 col-start-2 row-span-7 row-start-1 grid h-full grid-cols-subgrid grid-rows-subgrid gap-y-5 text-center"
      >
        <h1 class="col-span-10 row-span-1 mx-auto font-serif text-8xl font-bold">
          Hi, I am a developer!
        </h1>
        <div
          class="col-span-10 row-span-1 mx-auto mb-2 text-center font-mono text-3xl font-bold text-base-content/60"
        >
          <article class="">
            I design scalable web applications and APIs with modern tools, blending clean design
            with reliable performance.
          </article>
        </div>
        <TechStack
          class="col-span-10 row-span-5 grid grid-cols-subgrid grid-rows-subgrid gap-y-3"
        />
      </div>
      <!-- <div class="col-span-1"></div> -->
    </section>
    <!-- </div> -->
  </main>
</template>
