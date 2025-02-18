<script setup>
import IconPasswordKey from '@/components/icons/IconPasswordKey.vue';
import IconUsername from '@/components/icons/IconUsername.vue';
import IconEmail from '@/components/icons/IconEmail.vue';
import { useUserStore } from '@/stores/UserStore';

const userStore = useUserStore();
async function register(event) {
  const form = event.target.elements;
  const success = await userStore.register(
    form.username.value,
    form.email.value,
    form.password.value,
    form.password_confirm.value
  );
  if (success) {
    document.getElementById('sign_up_modal')?.close();
  }
}

// Extract errors from the store
const errors = computed(() =>
  typeof userStore.errorMessage === 'object' ? userStore.errorMessage : {}
);
</script>

<template>
  <dialog id="sign_up_modal" class="modal">
    <div class="modal-box w-1/6 min-w-max max-w-xl">
      <form action="" class="flex flex-col gap-4" @submit.prevent="register">
        <h3 class="self-center text-lg font-bold">Sign Up!</h3>

        <p v-if="userStore.errorMessage" class="whitespace-pre-wrap text-red-500">
          {{ userStore.errorMessage }}
        </p>
        <div>
          <div class="label">
            <span class="label-text">Username:</span>
          </div>
          <label class="input input-bordered flex items-center gap-2">
            <IconUsername class="shrink-0" />
            <input type="text" name="username" class="grow" />
          </label>
        </div>
        <div>
          <div class="label">
            <span class="label-text">Email:</span>
          </div>
          <label class="input input-bordered flex items-center gap-2">
            <IconEmail class="shrink-0" />
            <input type="text" name="email" class="grow" />
          </label>
        </div>
        <div>
          <div class="label">
            <span class="label-text">Password:</span>
          </div>
          <label class="input input-bordered flex items-center gap-2">
            <IconPasswordKey class="shrink-0" />
            <input type="password" name="password" class="grow" value="" />
          </label>
        </div>
        <div>
          <div class="label">
            <span class="label-text">Confirm password:</span>
          </div>
          <label class="input input-bordered flex items-center gap-2">
            <IconPasswordKey class="shrink-0" />
            <input type="password" name="password_confirm" class="grow" value="" />
          </label>
        </div>
        <div class="modal-action flex justify-between">
          <button type="submit" class="btn btn-primary">Sign Up</button>
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
          </form>
        </div>
      </form>
    </div>
  </dialog>
</template>
