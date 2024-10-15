<template>
    <div class="grid-cols-1 sm:grid md:grid-cols-3 gap-5 mb-8">
        <div v-for="post in posts" :key="post.id"
            class="duration-150 border-2 hover:scale-105 mx-3 mt-6 flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 sm:shrink-0 sm:grow sm:basis-0">
            <a href="#!">
                <img class="rounded-t-lg w-full h-[15vw] object-cover" :src="post.image" alt="" />
            </a>
            <div class="flex flex-col justify-between pt-6 px-6 pb-1">
                <h5 class="mb-2 text-xl font-bold leading-tight">{{ post.title }}</h5>
                <p v-html="post.description" class="mb-4 h-[100px] overflow-hidden text-ellipsis">
                </p>
                <span class="mt-5 overflow-hidden flex gap-1 items-end text-black">
                    <TagBadge v-for="tag in post.tags" :tag-name="tag" />
                </span>
            </div>
            <div
                class="overflow-hidden flex justify-between items-center border-t-2 border-neutral-100 px-6 py-3 text-center text-surface/75">
                <button
                class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-200 focus:bg-primary-accent-200 focus:outline-none focus:ring-0 active:bg-primary-accent-200 motion-reduce:transition-none">
                    <nuxt-link :to="`/posts/${post.slug}`"
                        class="btn btn-sm btn-outline-secondary">Details
                    </nuxt-link>
                </button>
                <p
                class="dark:text-neutral-300"
                >Created: {{ post.created_at }}</p>

            </div>
        </div>
    </div>
</template>

<script setup>
import TagBadge from './TagBadge.vue';

const props = defineProps({
    posts: Object
});
</script>