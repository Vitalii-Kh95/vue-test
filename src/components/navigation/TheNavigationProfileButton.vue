<script setup>
import { ref } from 'vue';
import SignInModal from '@/components/navigation/TheSignInModal.vue';
import SignUpModal from '@/components/navigation/TheSignUpModal.vue';
import { useUserStore } from '@/stores/UserStore';

const userStore = useUserStore();
userStore.fetchUserState();

const signInModal = ref(null);
const signUpModal = ref(null);

async function handleLogout() {
  try {
    await userStore.logout();
  } catch (error) {
    console.error('Unexpected error during logout:', error.message);
  }
}

function showModal(modalRef) {
  userStore.errorMessage = '';
  modalRef?.showModal();
}
</script>

<template>
  <div class="dropdown dropdown-end dropdown-hover">
    <div tabindex="0" role="button" class="btn btn-primary rounded-2xl text-primary-content">
      {{ userStore.loggedIn ? `${userStore.user}` : 'Sign In' }}
    </div>
    <ul
      tabindex="0"
      class="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 text-base-content shadow"
    >
      <li v-if="!userStore.loggedIn">
        <button @click="showModal(signInModal)">Log In</button>
      </li>
      <li v-if="!userStore.loggedIn">
        <button @click="showModal(signUpModal)">Sign Up</button>
      </li>
      <li v-if="userStore.loggedIn"><button @click="handleLogout">Log Out</button></li>

      <SignInModal ref="signInModal" />
      <SignUpModal ref="signUpModal" />
    </ul>
  </div>
</template>
