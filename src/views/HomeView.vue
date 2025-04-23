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
      class="flex flex-col items-center gap-6 bg-muted p-6 px-32 pt-10 md:w-3/4 md:overflow-auto"
    >
      <h1 class="mx-auto font-serif text-8xl font-bold">Hi, I am developer!</h1>
      <div class="prose mx-auto mb-10 text-center font-serif text-3xl font-bold">
        <article class="">
          I am the backend developer from your dreams, with hands-on experience on building web
          applications. Coming from a different field, I transitioned into tech to work on
          meaningful projects and expand my skills.
        </article>
      </div>
      <TechStack />
      <h1 class="text-2xl font-thin italic">
        I write with cursive to make it look more sophisticated! Follow your dreams and never give
        up! You can fly!
      </h1>
    </section>
    <!-- </div> -->
  </main>
</template>
