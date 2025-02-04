import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/app/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => {
        const user_type: 'SECRETARY' | 'MANAGER' | 'DOCTOR' = 'DOCTOR';
        if (user_type === 'DOCTOR') return import('../views/app/dashboard/ImedDoctorDashboard.vue')
        else if (user_type === 'MANAGER') return import('../views/app/dashboard/ImedManagerDashboard.vue')
        return import('../views/app/dashboard/ImedSecretaryDashboard.vue')
      },
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/app/dashboard/ImedDashboard.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/app/AboutView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.name === '') next({ name: 'home' });
  else next()
})

export default router
