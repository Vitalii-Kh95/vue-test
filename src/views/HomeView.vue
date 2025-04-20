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
  <main class="flex h-screen flex-col overflow-auto md:flex-row md:overflow-hidden">
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
      class="grid w-full auto-rows-min gap-4 bg-muted p-6 md:w-3/4 md:grid-cols-1 md:overflow-auto"
    >
      <!-- <Skills /> -->
      <About position="right" size="full" />
      <TechStack position="right" size="full" />
    </section>
    <!-- </div> -->
  </main>
</template>
