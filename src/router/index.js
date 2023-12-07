import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Settings from '../views/Settings.vue';
import Projects from '../views/Projects.vue';
import profile from '../views/profile.vue';
import Courses from '../views/Courses.vue';
import Friends from '../views/Friends.vue';
import Files from '../views/Files.vue';
import Plans from '../views/Plans.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path :'/Dashboard',
      redirect :'/'
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends
    },
    {
      path: '/files',
      name: 'files',
      component: Files
    },
    {
      path: '/plans',
      name: 'plans',
      component: Plans
    }
  ]
})

export default router
