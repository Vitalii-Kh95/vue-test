<template>
    <div class="">
        <div class="card bg-base-100 shadow-xl border-2 mb-7">
            <div class="card-body">
                <h2 class="card-title">Tags</h2>
                <div class="flex flex-wrap gap-3">
                        <TagBadge v-for="tag in tags" :key="tag.name" :tag-name="tag.name" />
                </div>
            </div>
        </div>

        <div class="card bg-base-100 shadow-xl border overflow-hidden">
            <div class="card-body bg-neutral-content">
                <h1 class="font-bold text-3xl text-center">Last posts</h1>
            </div>
            <div v-for="(post, index) in aside" :key="post.id" class="">
                <div class="card-body">
                    <h3 class="card-title">{{ post.title }}</h3>
                </div>
                <figure class=""><img class="max-h-[200px] w-full object-cover" :src="post.image" alt="Shoes" />
                </figure>
                <div class="card-body">
                    <div v-html="post.description" class="h-[100px] overflow-hidden text-ellipsis"></div>
                    <div class="card-actions">
                        <nuxt-link :to="`/posts/${post.slug}`" class="link link-primary">Details</nuxt-link>
                    </div>
                    <div class="divider my-0" v-if="index !== aside.length - 1"></div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { setTransitionHooks } from 'vue';

const props = defineProps({
    tags: Array,
    aside: Array
});

</script>