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
      class="relative flex min-h-screen flex-col items-center gap-6 p-6 px-32 pt-10 md:w-3/4 md:overflow-auto"
    >
      <img
        src="@/assets/cb01.svg"
        alt="Background"
        class="absolute inset-0 -z-10 h-full w-full bg-secondary object-cover opacity-10 bg-blend-exclusion"
      />
      <h1 class="mx-auto font-serif text-8xl font-bold">Hi, I am a developer!</h1>
      <div class="mx-auto mb-5 text-center font-mono text-3xl font-bold text-base-content/60">
        <article class="">
          I design scalable web applications and APIs with modern tools, blending clean design with
          reliable performance.
        </article>
      </div>
      <TechStack />
    </section>
    <!-- </div> -->
  </main>
</template>
