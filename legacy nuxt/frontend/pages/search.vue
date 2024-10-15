<template>
    <div class="flex flex-col items-center w-full">
        <Header :title="q" />
        <div class="container flex flex-col items-center mx-auto">
            <transition mode="out-in" enter-active-class="transition-all ease-in-out duration-200"
                leave-active-class="transition-all ease-in-out duration-200" :enter-from-class="enterFromClass"
                :leave-to-class="leaveToClass">

                <Cards :key="searchedPosts" :posts="searchedPosts.results" />
            </transition>
            <Pagination v-if="searchedPosts.count" :key="searchedPosts && q" :total=pagesCount @curent-page="(n) => curentPage = n" />
            <p class="my-10 text-3xl font-bold text-error" v-else>No results found</p>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: "post-detail"
});

const route = useRoute();
const q = computed(() => route.query.q);
const curentPage = ref(1);
const { data: searchedPosts, pending, status, error } = await useFetch('http://localhost:8000/api/posts',
    {
        query: {
            search: q,
            page: curentPage
        },
    }
);
const pagesCount = computed(() => (~~(+searchedPosts.value.count / 6) + 1));
const enterFromClass = ref("opacity-0 transform -translate-x-1/2");
const leaveToClass = ref("opacity-0 transform translate-x-1/2");

watch(curentPage, (newValue, oldValue) => {
    if (newValue < oldValue) {
        enterFromClass.value = "opacity-0 transform -translate-x-1/2";
        leaveToClass.value = "opacity-0 transform translate-x-1/2";
    } else {
        enterFromClass.value = "opacity-0 transform translate-x-1/2";
        leaveToClass.value = "opacity-0 transform -translate-x-1/2";
    }
});
</script>
