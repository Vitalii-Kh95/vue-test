<script setup>
import About from '@/components/resume blocks/TheAbout.vue';
import Contact from '@/components/resume blocks/TheContact.vue';
import Skills from '@/components/resume blocks/TheSkills.vue';
import TechStack from '@/components/resume blocks/TheTechStack.vue';
import Languages from '@/components/resume blocks/TheLanguages.vue';
import Practices from '@/components/resume blocks/ThePractices.vue';
import Photo from '@/components/resume blocks/ThePhoto.vue';
</script>

<template>
  <main class="flex h-screen flex-col overflow-hidden md:flex-row">
    <!-- Left Panel -->
    <aside class="flex w-full flex-col gap-4 p-6 md:w-1/4">
      <Photo class="self-center" />
      <Contact position="left" size="full" titleStyle="ribbon" />
      <Languages position="left" size="full" titleStyle="ribbon" />
    </aside>

    <!-- Right Panel -->
    <section
      class="flex w-full flex-col gap-4 overflow-auto bg-muted p-6 text-secondary-content md:w-3/4"
    >
      <!-- <Skills /> -->
      <About position="right" size="fit" />
      <TechStack position="right" />
      <Practices position="right" />
    </section>
    <!-- </div> -->
  </main>
</template>
