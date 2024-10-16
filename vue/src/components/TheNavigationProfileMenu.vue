<script setup></script>

<template>
  <div>
    <span v-if="loggedIn" class="flex items-center gap-4 lg:ps-5">
      <span class="mx-2 whitespace-nowrap text-white">{{ data.username }}</span>
      <router-link class="whitespace-nowrap text-white" to="/signout">Sign Out</router-link>
    </span>
    <span v-else class="flex items-center gap-4 lg:ps-5">
      <router-link class="whitespace-nowrap text-white" to="/signin">Sign In</router-link>
      <router-link class="whitespace-nowrap text-white" to="/signup">Sign Up</router-link>
    </span>
  </div>
</template>
