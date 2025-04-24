<script setup>
import IconPython from '@/components/icons/IconPython.vue';
import IconJavaScript from '@/components/icons/IconJavaScript.vue';
import IconTypeScript from '@/components/icons/IconTypeScript.vue';
import IconVue from '@/components/icons/IconVue.vue';
import IconTailwind from '@/components/icons/IconTailwind.vue';
import IconDjango from '@/components/icons/IconDjango.vue';
import IconSQL from '@/components/icons/IconSQL.vue';
import IconAPI from '@/components/icons/IconAPI.vue';
import TechStackGrid from './TechStackGrid.vue';
import FrontEndSkills from './FrontEndSkills.vue';
import BackEndSkills from './BackEndSkills.vue';
const backendItems = [
  {
    title: 'Python',
    icon: IconPython
  },
  {
    title: 'Django',
    icon: IconDjango
  },
  {
    title: 'SQL',
    icon: IconSQL
  },
  {
    title: 'RESTful API',
    icon: IconAPI
  }
];
const frontendItems = [
  {
    title: 'JavaScript',
    icon: IconJavaScript
  },
  {
    title: 'TypeScript',
    icon: IconTypeScript
  },
  {
    title: 'Vue',
    icon: IconVue
  },
  {
    title: 'TailwindCSS',
    icon: IconTailwind
  }
];
</script>

<template>
  <h2 class="mx-auto text-[2.6rem] font-bold">Tech Stack</h2>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col px-5">
      <h3 class="font-serif text-3xl font-bold">Front-end</h3>
      <div class="flex gap-x-8">
        <FrontEndSkills />
        <div class="w-1/2">
          <TechStackGrid :items="frontendItems" />
        </div>
      </div>
    </div>
    <div class="flex flex-col px-5">
      <div class="text-right">
        <h3 class="right font-serif text-3xl font-bold">Back-end</h3>
      </div>
      <div class="flex gap-x-8">
        <div class="w-1/2">
          <TechStackGrid :items="backendItems" />
        </div>
        <BackEndSkills />
      </div>
    </div>
  </div>
</template>
<!-- <script setup>
import FlexibleBlock from './FlexibleBlock.vue';
</script>

<template>
  <FlexibleBlock title="Tech Stack">
    <div>
      <h2>Back-end</h2>
      <p>• Python, Django, Django REST Framework</p>
      <p>• SQL</p>

      <h2>Front-end</h2>
      <p>• Javascript, Vue 3, Vite</p>
      <p>• Tailwind CSS</p>

      <h2>DevOps & Tools</h2>
      <p>• Nginx</p>
      <p>• Git, GitHub</p>
    </div>
  </FlexibleBlock>
</template> -->
