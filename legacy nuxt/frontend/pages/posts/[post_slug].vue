<template>
    <div class="flex flex-col items-center w-full">
        <Header :title=post.title />
        <div class="container mt-6 grid grid-cols-3 gap-20 w-[90%] mx-auto">
            <!--    ЭТО ЛЕВАЯ КОЛОНКА КОНТЕНТА ПОСТА -->
            <div class="col-span-2">
                <!--    ЭТО ТЕЛО ПОСТА -->
                <img class="img-fluid rounded " :src="post.image" alt="">

                <div class="divider"></div> 

                <p v-html="post.content">
                </p>
                <div class="text-right mt-5">
                    <span v-for="tag in post.tags">
                        <nuxt-link :to="`/tags/${tag}`" class="mr-1 badge bg-info text-dark">#{{ tag }}</nuxt-link>
                    </span>
                </div>
                <div class="divider"></div> 

                <div class="flex justify-between">
                    <div class="mr-auto p-2 lead">Author: {{ post.author }}</div>
                    <div class="p-2">Published: {{ post.created_at }}</div>
                </div>
                <div class="divider"></div> 
            </div>
            <Aside :tags=tags :aside=aside />
        </div>
    </div>
</template>

<script setup>

const { post_slug } = useRoute().params;

const { data: post } = await useFetch(`http://127.0.0.1:8000/api/posts/${post_slug}`);
const { data: tags } = await useFetch('http://127.0.0.1:8000/api/tags');
const { data: aside } = await useFetch('http://127.0.0.1:8000/api/aside');
const { data: comments } = await useFetch(`http://127.0.0.1:8000/api/comments/${post_slug}`);

definePageMeta({
    layout: 'post-detail',
});
</script>

<style scoped></style>