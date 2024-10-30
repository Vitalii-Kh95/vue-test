<script>
import PostDetail from '@/components/PostDetail.vue';
import { getPost } from '@/functions';

export default {
  components: {
    PostDetail
  },
  data() {
    return {
      post: {},
      error: null
    };
  },
  async beforeRouteEnter(to, from, next) {
    try {
      const post = await getPost(to.params.slug);
      next((vm) => vm.setPost(post));
    } catch (err) {
      next((vm) => vm.setError(err));
    }
  },
  beforeRouteUpdate(to, from) {
    this.post = null;
    getPost(to.params.slug).then(this.setPost).catch(this.setError);
  },
  methods: {
    setPost(post) {
      this.post = post;
    },
    setError(err) {
      this.error = err.toString();
    }
  }
};
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <div v-if="error" class="error">{{ error }}</div>

    <!-- <Header :title="post.title" /> -->
    <div class="container mx-auto mt-6 grid w-[90%] grid-cols-3 gap-20">
      <PostDetail :post="post" />
      <!-- <Aside :tags="tags" :aside="aside" /> -->
    </div>
  </div>
</template>
