<script setup>
import IconPasswordKey from '@/components/icons/IconPasswordKey.vue';
import IconUsername from '@/components/icons/IconUsername.vue';
import { useUserStore } from '@/stores/UserStore';

const userStore = useUserStore();

async function login(event) {
  const form = event.target.elements;
  const success = await userStore.login(form.username.value, form.password.value);
  if (success) {
    document.getElementById('sign_in_modal')?.close();
  }
}
</script>

<template>
  <dialog id="sign_in_modal" class="modal">
    <div class="modal-box w-1/6 min-w-max max-w-xl">
      <form @submit.prevent="login" class="flex flex-col gap-4">
        <h3 class="self-center text-lg font-bold">Sign In!</h3>
        <p v-if="userStore.errorMessage" class="text-red-500">
          {{ userStore.errorMessage }}
        </p>
        <div>
          <div class="label">
            <span class="label-text">Username or Email:</span>
          </div>
          <label class="input input-bordered flex items-center gap-2">
            <IconUsername class="shrink-0" />
            <input type="text" name="username" class="grow" />
          </label>
        </div>
        <div>
          <div class="label">
            <span class="label-text">Password:</span>
          </div>
          <label class="input input-bordered flex items-center gap-2">
            <IconPasswordKey class="shrink-0" />
            <input type="password" class="grow" name="password" value="" />
          </label>
        </div>
        <div class="modal-action flex justify-between">
          <button type="submit" class="btn btn-accent">Sign In</button>
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </form>
    </div>
  </dialog>
</template>
