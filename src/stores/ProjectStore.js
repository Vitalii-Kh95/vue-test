import { defineStore } from 'pinia';
import { getPosts, getPost, parseUrlParams } from '@/utils/functionsAPIRelated';

export const useProjectStore = defineStore('projectStore', {
  state: () => {
    return {
      count: null,
      pageSize: null,
      currentPage: null,
      nextPage: null,
      previousPage: null,
      projects: [],
      project: null
    };
  },

  getters: {
    pageCount: (state) => {
      if (state.count) {
        return Math.ceil(state.count / state.pageSize);
      }
    }
  },

  actions: {
    async getPosts({ limit = 6, offset = 0, search = undefined, tag = undefined }) {
      this.pageSize = limit;
      this.currentPage = offset / limit + 1;
      ({
        count: this.count,
        next: this.nextPage,
        previous: this.previousPage,
        results: this.projects
      } = await getPosts({
        limit: limit,
        offset: offset,
        search: search,
        tag: tag,
        type: 'projects'
      }));
    },

    async getPreviousPage() {
      const { limit, offset, search, tag } = await parseUrlParams(this.previousPage);
      await this.getPosts({ limit, offset, search, tag });
    },

    async getNextPage() {
      const { limit, offset, search, tag } = await parseUrlParams(this.nextPage);
      await this.getPosts({ limit, offset, search, tag });
    },

    async getPost(slug) {
      this.project = await getPost({ slug: slug, type: 'projects' });
    }
  }
});
