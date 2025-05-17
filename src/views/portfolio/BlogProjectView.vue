<script setup></script>

<template>
  <div class="flex flex-col items-center gap-y-3">
    <div class="">
      <img src="/BlogScreenshot.png" alt="" />
    </div>
    <h2>
      A modern, responsive blog platform designed for publishing and showcasing content, with
      features typical of a real-world, secure web application.
    </h2>
    <div class="flex w-full gap-x-1">
      <div>
        <h3 class="my-2 text-xl">🔧 Backend Features (Django REST Framework)</h3>
        <ul class="list-inside list-disc ps-2">
          <li>RESTful API serving structured data to the frontend.</li>
          <li>Secure user authentication with session-based login and CSRF protection.</li>
          <li>Access permissions controlling visibility and available actions per user role.</li>
          <li>Built-in filtering and pagination for scalable content delivery.</li>
          <li>Status endpoint for backend health checks (used by the frontend).</li>
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
    <!-- <router-link class="btn btn-primary mx-auto block h-32 w-10/12 pt-6" :to="{ name: 'blog' }"
      ><span class="text-xl text-primary-content"
        >Нажми На эту большую уродливую кнопку что бы перейти на блог</span
      ></router-link
    > -->
  </div>
</template>
