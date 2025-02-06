import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      children: [
        {
          path: '',
          name: 'projects',
          component: () => import('../views/projects/ProjectsView.vue')
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
        },
        {
          path: 'search',
          name: 'projects-search',
          component: () => import('../views/projects/SearchView.vue')
        },
        {
          path: ':slug',
          name: 'projects-detail',
          component: () => import('../views/projects/projectsDetailsView.vue')
        },
        {
          path: 'tags/:slug',
          name: 'projects-tag-detail',
          component: () => import('../views/projects/TagView.vue')
        }
      ]
    },
    {
      path: '/blog',
      children: [
        {
          path: '',
          name: 'blog',
          component: () => import('../views/blog/BlogView.vue')
        },
        {
          path: 'search',
          name: 'blog-search',
          component: () => import('../views/blog/SearchView.vue')
        },
        {
          path: ':slug',
          name: 'blog-detail',
          component: () => import('../views/blog/BlogDetailsView.vue')
        },
        {
          path: 'tags/:slug',
          name: 'blog-tag-detail',
          component: () => import('../views/blog/TagView.vue')
        }
      ]
    }
  ]
});

export default router;
