<script setup>
import SignInModal from '@/components/navigation/TheSignInModal.vue';
import SignUpModal from '@/components/navigation/TheSignUpModal.vue';
import { useUserStore } from '@/stores/UserStore';

const userStore = useUserStore();
userStore.fetchUserState();

async function handleLogout() {
  try {
    const success = await userStore.logout();
    if (success) {
      console.log('Logout successful');
    } else {
      console.error('Logout failed:', userStore.errorMessage);
    }
  } catch (error) {
    console.error('Unexpected error during logout:', error.message);
  }
}
</script>

<template>
  <div class="dropdown dropdown-end dropdown-hover">
    <div tabindex="0" role="button" class="btn btn-accent rounded-2xl">
      {{ userStore.loggedIn ? `${userStore.user}` : 'Sign In' }}
    </div>
    <ul
      tabindex="0"
      class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 text-base-content shadow"
    >
      <li v-if="!userStore.loggedIn">
        <button onclick="sign_in_modal.showModal()">Log In</button>
      </li>
      <li v-if="!userStore.loggedIn">
        <button onclick="sign_up_modal.showModal()">Sign Up</button>
      </li>
      <li v-if="userStore.loggedIn"><button @click="handleLogout">Log Out</button></li>

      <SignInModal />
      <SignUpModal />
    </ul>
  </div>
</template>
