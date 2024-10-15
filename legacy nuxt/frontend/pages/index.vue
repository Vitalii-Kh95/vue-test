<template>
    <div class="container flex flex-col items-center mx-auto px-20">
        <h1 class="text-4xl text-center  font-bold mt-5 mb-2">Recent blog posts</h1>
        
        <transition mode="out-in" enter-active-class="transition-all ease-in-out duration-200"
            leave-active-class="transition-all ease-in-out duration-200" :enter-from-class="enterFromClass"
            :leave-to-class="leaveToClass">

            <Cards :key="posts" :posts="posts.results" />
        </transition>

        <Pagination :total=pagesCount @curent-page="(n) => curentPage = n" class="my-5" />
    </div>
</template>

<script setup>
const curentPage = ref(1);
const { data: posts, pending, status, error } = await useFetch('http://localhost:8000/api/posts',
    {
        query: {
            page: curentPage
        },
    }
);
const pagesCount = (~~(+posts.value.count / 6) + 1);
definePageMeta({
});

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

<style scoped></style>