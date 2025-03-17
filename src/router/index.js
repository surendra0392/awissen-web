import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'AWISSEN - Educational Seminars & Certification Courses'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About AWISSEN - Our Mission, Vision & Team'
    }
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import('../views/CoursesView.vue'),
    meta: {
      title: 'Courses - AWISSEN Certification Programs'
    }
  },
  {
    path: '/courses/mechanical',
    name: 'mechanical-courses',
    component: () => import('../views/MechanicalCoursesView.vue'),
    meta: {
      title: 'Mechanical Engineering Courses - AWISSEN'
    }
  },
  {
    path: '/courses/ece',
    name: 'ece-courses',
    component: () => import('../views/ECECoursesView.vue'),
    meta: {
      title: 'Electronics & Communication Courses - AWISSEN'
    }
  },
  {
    path: '/courses/eee',
    name: 'eee-courses',
    component: () => import('../views/EEECoursesView.vue'),
    meta: {
      title: 'Electrical & Electronics Courses - AWISSEN'
    }
  },
  {
    path: '/courses/:id',
    name: 'course-detail',
    component: () => import('../views/CourseDetailView.vue'),
    meta: {
      title: 'Course Details - AWISSEN'
    }
  },
  {
    path: '/certification',
    name: 'certification',
    component: () => import('../views/CertificationView.vue'),
    meta: {
      title: 'Certification Process - AWISSEN'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact Us - AWISSEN'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
    meta: {
      title: 'Page Not Found - AWISSEN'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'AWISSEN';
  next();
})

export default router