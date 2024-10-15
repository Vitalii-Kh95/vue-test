<template>
    <div class="navbar bg-neutral text-neutral-content sticky top-0  z-50">
        <div class="flex-1">
            <nuxt-link to="/" class="btn btn-ghost text-xl">Home</nuxt-link>
            <nuxt-link to="/contacts" class="btn btn-ghost text-xl">Contact me</nuxt-link>
        </div>
        <div class="flex-none gap-2">
            <form @submit.prevent="submit" role="search" class="join">
                <label class="input input-bordered rounded-full overflow-hidden flex items-center gap-2 pe-0">
                    <input v-model="search" type="text" class="grow text-accent-content" placeholder="Search" />
                    <button class="btn btn-info me-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                            class="w-4 h-4 opacity-70">
                            <path fill-rule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </label>
            </form>
            <div class="pr-5">
                <span v-if="loggedIn" class="flex gap-4 items-center lg:ps-5">
                    <span class="text-white mx-2">{{ data.username }}</span>
                    <nuxt-link class="text-white " to="/signout">Sign Out</nuxt-link>
                </span>
                <span v-else class="flex gap-4 items-center lg:ps-5">
                    <nuxt-link class="text-white " to="/signin">Sign In</nuxt-link>
                    <nuxt-link class="text-white " to="/signup">Sign Up</nuxt-link>
                </span>
            </div>
        </div>
    </div>

</template>

<script setup>
//const emit = defineEmits(['q']);
const { status, data } = useAuth()
const search = ref(null);

const loggedIn = computed(() => {
    return status.value === 'authenticated';
})

const router = useRouter();
function submit() {
    //emit('q', search.value);
    if (search.value) {
        return router.push({
            path: '/search',
            query: { q: search.value },
        });
    }
}


</script>

<style scoped></style>