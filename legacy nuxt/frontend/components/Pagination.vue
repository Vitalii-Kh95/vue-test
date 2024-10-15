<template>
    <nav aria-label="Paginate me">
        <ul class="list-style-none flex">
            <li class="page-item">
                <button v-if="prevPage === null" :disabled="true"
                    class="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface/50 transition duration-300 dark:text-neutral-400">Previous</button>
                <button v-else :disabled="false"
                    class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
                    @click="getPage(prevPage)">
                    Previous
                </button>
            </li>
            <span v-for="n in total">
                <li v-if="n !== activePage"
                    class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500">
                    <button class="page-link" :disabled="false" @click="getPage(n)">{{ n }}</button>
                </li>
                <li v-else
                    class="relative block rounded bg-primary-content px-3 py-1.5 text-sm font-medium text-primary-700 transition duration-300 focus:outline-none dark:bg-slate-900 dark:text-primary-500">
                    <button class="page-link" :disabled="true">{{ n }}</button>
                </li>
            </span>
            <li class="page-item">
                <button v-if="nextPage === null" :disabled="true"
                    class="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm">Next</button>
                <button v-else :disabled="false"
                    class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral focus:text-primary focus:outline-none active:bg-neutral-100 active:text-primary"
                    @click="getPage(nextPage)">
                    Next
                </button>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const props = defineProps(['total']);
const emit = defineEmits(['curentPage']);
const activePage = ref(1);
const prevPage = computed(() => activePage.value > 1 ? activePage.value - 1 : null);
const nextPage = computed(() => activePage.value < props.total ? activePage.value + 1 : null);

async function getPage(page) {
    console.warn('page', page);
    activePage.value = page;
    emit('curentPage', page);
}
</script>

<style scoped></style>