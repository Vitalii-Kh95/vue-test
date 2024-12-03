<script setup>
import { usePostStore } from '@/stores/PostStore';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const postStore = usePostStore();
postStore.getPosts({ limit: 4 });
const posts = computed(() => postStore.posts.filter((post) => post.slug !== route.params.slug));
// if not posts.length = 4 getposts limit 1 offset 3
</script>
<template>
  <div class="card h-fit overflow-hidden border bg-base-100 shadow-xl">
    <div class="bg-neutral-content p-5 text-neutral">
      <h1 class="text-center text-3xl font-bold">Last posts</h1>
    </div>
    <div v-for="(post, index) in posts" :key="post.id">
      <div class="card-body">
        <h3 class="card-title">{{ post.title }}</h3>
      </div>
      <figure class="">
        <img class="max-h-[200px] w-full object-cover" :src="post.image" alt="Shoes" />
      </figure>
      <div class="card-body">
        <div v-html="post.description" class="h-[100px] overflow-hidden text-ellipsis"></div>
        <div class="card-actions">
          <router-link
            :to="{ name: 'blog-detail', params: { slug: post.slug } }"
            class="link link-primary"
            >Details</router-link
          >
        </div>
        <div class="divider my-0" v-if="index !== posts.length - 1"></div>
      </div>
    </div>
  </div>
</template>
