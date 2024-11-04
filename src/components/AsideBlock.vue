<script setup>
import { usePostStore } from '@/stores/PostStore';

const postStore = usePostStore();
postStore.getPosts({ limit: 4 });
</script>
<template>
  <div class="card overflow-hidden border bg-base-100 shadow-xl">
    <div class="card-body bg-neutral-content">
      <h1 class="text-center text-3xl font-bold">Last posts</h1>
    </div>
    <div v-for="(post, index) in postStore.posts" :key="post.id">
      <div class="card-body">
        <h3 class="card-title">{{ post.title }}</h3>
      </div>
      <figure class="">
        <img class="max-h-[200px] w-full object-cover" :src="post.image" alt="Shoes" />
      </figure>
      <div class="card-body">
        <div v-html="post.description" class="h-[100px] overflow-hidden text-ellipsis"></div>
        <div class="card-actions">
          <nuxt-link :to="`/posts/${post.slug}`" class="link link-primary">Details</nuxt-link>
        </div>
        <div class="divider my-0" v-if="index !== postStore.posts.length - 1"></div>
      </div>
    </div>
  </div>
</template>
