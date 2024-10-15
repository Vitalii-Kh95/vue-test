<template>
    <div class="flex flex-col items-center w-full">
        <Header :title=title />
        <div class="container flex flex-col items-center mx-auto">
            <p class="my-3 flex self-start gap-1 overflow-clip">Other tags:
                <TagBadge v-for="tag in tags" :tag-name="tag.name" />
            </p>

            <transition mode="out-in" enter-active-class="transition-all ease-in-out duration-200"
                leave-active-class="transition-all ease-in-out duration-200" :enter-from-class="enterFromClass"
                :leave-to-class="leaveToClass">

                <Cards :key="posts" :posts="posts.results" />
            </transition>
            <Pagination :total=pagesCount @curent-page="(n) => curentPage = n" class="" />
        </div>
    </div>
</template>

<script setup>
definePageMeta({ layout: 'post-detail' });
const curentPage = ref(1);
const { tag } = useRoute().params;
const title = `#${tag}`;
const { data: posts } = await useFetch(`http://127.0.0.1:8000/api/tags/${tag}`,
    {
        query: {
            page: curentPage
        },
    });
const { data: tags } = await useFetch('http://127.0.0.1:8000/api/tags', {
    key: 'tags'
});
const pagesCount = (~~(+posts.value.count / 6) + 1);

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