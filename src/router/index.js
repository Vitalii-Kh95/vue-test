import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import { usePostStore } from '@/stores/PostStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { title: 'Vitalii Kholmukhamedov' }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue'),
      meta: { title: 'Portfolio' }
    },
    {
      path: '/blog',
      children: [
        {
          path: '',
          name: 'blog',
          component: () => import('../views/blog/BlogView.vue'),
          meta: { title: 'Blog Example' }
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
        },
        {
          path: 'search',
          name: 'blog-search',
          component: () => import('../views/blog/SearchView.vue'),
          meta: { title: 'Blog Search' }
        },
        {
          path: ':slug',
          name: 'blog-details',
          component: () => import('../views/blog/BlogDetailsView.vue'),
          // meta: { title: (route) => `${route.params.slug}` },
          beforeEnter: async (to) => {
            const postStore = usePostStore();
            await postStore.getPost(to.params.slug);
            document.title = postStore.post.title || 'Blog Example';
          }
        },
        {
          path: 'tags/:slug',
          name: 'blog-tag-detail',
          component: () => import('../views/blog/TagView.vue'),
          meta: { title: (route) => `#${route.params.slug}` }
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

// router.beforeEach((to, _from, next) => {
//   const defaultTitle = 'Vitalii Kholmukhamedov';
//   if (typeof to.meta.title === 'function') {
//     document.title = to.meta.title(to);
//   } else {
//     document.title = to.meta.title || defaultTitle;
//   }
//   next();
// });

export default router;
