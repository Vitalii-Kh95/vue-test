import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      children: [
        {
          path: '',
          name: 'blog',
          component: () => import('../views/blog/BlogView.vue')
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
        },
        {
          path: 'search',
          name: 'blog-search',
          component: () => import('../views/blog/SearchView.vue')
        },
        {
          path: ':slug',
          name: 'blog-details',
          component: () => import('../views/blog/BlogDetailsView.vue')
        },
        {
          path: 'tags/:slug',
          name: 'blog-tag-detail',
          component: () => import('../views/blog/TagView.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/components/NotFound.vue')
    }
  ]
});

export default router;
