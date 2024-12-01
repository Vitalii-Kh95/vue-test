<script setup></script>

<template>
  <div class="dropdown dropdown-end dropdown-hover">
    <div tabindex="0" role="button" class="btn btn-accent rounded-2xl">login</div>
    <ul
      tabindex="0"
      class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 text-base-content shadow"
    >
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
  <!-- <div>
    <span v-if="loggedIn" class="flex items-center gap-4 lg:ps-5">
      <span class="mx-2 whitespace-nowrap text-white">{{ data.username }}</span>
      <router-link class="whitespace-nowrap text-white" to="/signout">Sign Out</router-link>
    </span>
    <span v-else class="flex items-center gap-4 lg:ps-5">
      <router-link class="whitespace-nowrap text-white" to="/signin">Sign In</router-link>
      <router-link class="whitespace-nowrap text-white" to="/signup">Sign Up</router-link>
    </span>
  </div> -->
</template>
