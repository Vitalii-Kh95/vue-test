<script setup>
import { useHealthStore } from '@/stores/HealthStore';

const healthStore = useHealthStore();
</script>

<template>
  <div class="container flex flex-col items-center gap-y-3">
    <div class="">
      <img src="/BlogScreenshot.png" alt="" />
    </div>
    <h2>
      A modern, responsive blog platform designed for publishing and showcasing content, with
      features typical of a real-world, secure web application.
    </h2>
    <div class="flex w-full flex-col gap-x-3 lg:flex-row">
      <div>
        <h3 class="my-2 text-xl">🔧 Backend Features (Django REST Framework)</h3>
        <ul class="list-inside list-disc ps-2">
          <li>RESTful API serving structured data to the frontend.</li>
          <li>Secure user authentication with session-based login and CSRF protection.</li>
          <li>Access permissions controlling visibility and available actions per user role.</li>
          <li>Built-in filtering and pagination for scalable content delivery.</li>
        </ul>
      </div>
      <div class="">
        <h3 class="my-2 text-xl">💻 Frontend Features (Vue 3)</h3>
        <ul class="list-inside list-disc ps-2">
          <li>Interactive interface powered by Vue and connected to the backend via API.</li>
          <li>Dynamic page routing with on-demand component loading (Vue Router).</li>
          <li>Centralized state management (Pinia) handling user sessions and data flow.</li>
          <li>Route protection for pages requiring login.</li>
        </ul>
      </div>
      <div>
        <h3 class="my-2 text-xl">🎨 UI and Design (Tailwind CSS)</h3>
        <ul class="list-inside list-disc ps-2">
          <li>Clean, responsive layout suitable for various screen sizes and devices.</li>
          <li>Utility-based styling for fast and consistent UI development.</li>
        </ul>
      </div>
    </div>

    <router-link
      v-if="healthStore.blogAPIStatus === 'ok'"
      class="btn btn-primary"
      :to="{ name: 'blog' }"
      >See it in action!</router-link
    >
    <p v-else class="px-4 text-lg text-error">Demonstration isn't available at the moment</p>
  </div>
</template>
