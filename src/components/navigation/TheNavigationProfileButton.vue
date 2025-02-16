<script setup>
import SignInModal from '@/components/navigation/TheSignInModal.vue';
import SignUpModal from '@/components/navigation/TheSignUpModal.vue';
import { useUserStore } from '@/stores/UserStore';

const userStore = useUserStore();
userStore.fetchUserState();

async function handleLogout() {
  try {
    await userStore.logout();
  } catch (error) {
    console.error('Unexpected error during logout:', error.message);
  }
}

async function showModal(modalId) {
  userStore.errorMessage = '';
  document.getElementById(modalId).showModal();
}
</script>

<template>
  <div class="dropdown dropdown-end dropdown-hover">
    <div tabindex="0" role="button" class="btn btn-primary rounded-2xl">
      {{ userStore.loggedIn ? `${userStore.user}` : 'Sign In' }}
    </div>
    <ul
      tabindex="0"
      class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 text-base-content shadow"
    >
      <li v-if="!userStore.loggedIn">
        <button @click="showModal('sign_in_modal')">Log In</button>
      </li>
      <li v-if="!userStore.loggedIn">
        <button @click="showModal('sign_up_modal')">Sign Up</button>
      </li>
      <li v-if="userStore.loggedIn"><button @click="handleLogout">Log Out</button></li>

      <SignInModal />
      <SignUpModal />
    </ul>
  </div>
</template>
