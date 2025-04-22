<script setup>
import Cell from './TechStackCell.vue';
import IconPython from '@/components/icons/IconPython.vue';
import IconJavaScript from '@/components/icons/IconJavaScript.vue';
import IconTypeScript from '@/components/icons/IconTypeScript.vue';
import IconVue from '@/components/icons/IconVue.vue';
import IconTailwind from '@/components/icons/IconTailwind.vue';
import IconDjango from '@/components/icons/IconDjango.vue';
import IconSQLite from '@/components/icons/IconSQLite.vue';
import IconPostgreSQL from '@/components/icons/IconPostgreSQL.vue';
</script>

<template>
  <div class="flex w-full flex-col gap-y-3">
    <h2 class="mx-auto text-4xl font-bold">TechStack</h2>
    <div class="flex gap-x-8">
      <div class="flex w-1/2 flex-col gap-3 rounded-lg border-2 border-dashed p-5 pt-4 shadow-sm">
        <h3 class="font-serif text-2xl font-bold">Back-end:</h3>
        <div class="grid gap-6 md:grid-cols-2">
          <Cell title="Python" :icon="IconPython" />
          <Cell title="Django" :icon="IconDjango" />
          <Cell title="SQL" :icon="IconSQLite" />
          <Cell title="PostgreSQL" :icon="IconPostgreSQL" />
          <Cell title="SQL" :icon="IconSQLite" />
          <Cell title="PostgreSQL" :icon="IconPostgreSQL" />
        </div>
      </div>
      <div class="flex w-1/2 flex-col rounded-2xl border-2 border-dashed p-5 pt-4">
        <h3 class="text-2xl font-bold">Front-end:</h3>
        <div class="grid gap-4 md:grid-cols-2">
          <Cell title="JavaScript" :icon="IconJavaScript" />
          <Cell title="TypeScript" :icon="IconTypeScript" />
          <Cell title="Vue" :icon="IconVue" />
          <Cell title="TailwindCSS" :icon="IconTailwind" />
          <Cell title="SQL" :icon="IconSQLite" />
          <Cell title="PostgreSQL" :icon="IconPostgreSQL" />
        </div>
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
