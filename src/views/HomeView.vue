<script setup>
import About from '@/components/resume blocks/TheAbout.vue';
import Contact from '@/components/resume blocks/TheContact.vue';
import Skills from '@/components/resume blocks/TheSkills.vue';
import TechStack from '@/components/resume blocks/TheTechStack.vue';
import Languages from '@/components/resume blocks/TheLanguages.vue';
import Practices from '@/components/resume blocks/ThePractices.vue';
</script>

<template>
  <main class="flex h-screen flex-col overflow-hidden bg-base-200 md:flex-row">
    <!-- <div class="h-[7vw] text-center">Это страница где я представляюсь</div> -->
    <!-- <div class="flex h-full flex-grow overflow-hidden"> -->
    <!-- Left Panel -->
    <aside
      class="m-5 flex w-full flex-col gap-4 rounded-lg bg-primary p-6 text-primary-content md:w-1/3"
    >
      <About />
      <Contact />
      <Languages />
    </aside>

    <!-- Right Panel -->
    <section
      class="my-5 flex w-full flex-col gap-4 overflow-auto rounded-l-lg bg-secondary p-6 text-secondary-content md:w-2/3"
    >
      <!-- <Skills /> -->
      <TechStack />
      <Practices />
    </section>
    <!-- </div> -->
  </main>
</template>
