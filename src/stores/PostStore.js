import { defineStore } from 'pinia';
import { getPosts, getPost } from '@/functions';
export const usePostStore = defineStore('postStore', {
  state: () => {
    return {
      count: null,
      nextPage: null,
      previousPage: null,
      posts: {},
      post: null,
      pageSize: null
    };
  },

  getters: {
    PageCount: (state) => {
      if (state.count) {
        return Math.ceil(state.count / this.pageSize);
      }
    }
  },

  actions: {
    async getPosts({ limit = 6, offset = 0, searchQuery = undefined }) {
      this.pageSize = limit;
      ({
        count: this.count,
        next: this.nextPage,
        previous: this.previousPage,
        results: this.posts
      } = await getPosts({ limit: limit, offset: offset, searchQuery: searchQuery }));
    },

    async getPost(slug) {
      this.post = await getPost(slug);
    }
  }
});
