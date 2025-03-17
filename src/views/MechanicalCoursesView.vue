<template>
  <div>
    <!-- Page Header -->
    <section class="relative py-20 bg-primary/10">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-heading font-bold mb-4">Mechanical Engineering Courses</h1>
        <p class="text-xl text-dark/70 dark:text-light/70 max-w-3xl">
          Specialized certification courses in various aspects of mechanical engineering.
        </p>
      </div>
    </section>

    <!-- Course Categories -->
    <section class="py-16">
      <div class="container-custom">
        <div class="flex flex-wrap gap-4 mb-12">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="activeCategory = category.id"
            class="px-6 py-3 rounded-full transition-all duration-300"
            :class="activeCategory === category.id ? 'bg-primary text-white' : 'glass-card hover:bg-primary/10'"
          >
            {{ category.name }}
          </button>
        </div>

        <div v-if="activeCategory === 'all'">
          <courses-list :courses="mechanicalCourses" />
        </div>
        <div v-else>
          <courses-list :courses="filteredCourses" />
        </div>
      </div>
    </section>

    <!-- Industry Applications -->
    <section class="py-16 bg-light/50 dark:bg-dark/50">
      <div class="container-custom">
        <h2 class="section-title text-center mb-12">Industry Applications</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="glass-card p-8 rounded-xl">
            <h3 class="text-2xl font-heading font-bold mb-4">Automotive Industry</h3>
            <p class="mb-4">
              Our mechanical engineering courses prepare you for careers in the automotive industry, including traditional combustion engine vehicles and the rapidly growing electric vehicle sector.
            </p>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Engine design and optimization</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Electric vehicle systems</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Vehicle performance tuning</span>
              </li>
            </ul>
          </div>
          <div class="glass-card p-8 rounded-xl">
            <h3 class="text-2xl font-heading font-bold mb-4">Manufacturing Sector</h3>
            <p class="mb-4">
              Our courses equip you with the skills needed to excel in modern manufacturing environments, from traditional processes to advanced automation.
            </p>
            <ul class="space-y-2">
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>CNC machining and programming</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>3D printing and additive manufacturing</span>
              </li>
              <li class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>Production planning and optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Career Opportunities -->
    <section class="py-16">
      <div class="container-custom">
        <h2 class="section-title text-center mb-12">Career Opportunities</h2>
        <div class="glass-card p-8 rounded-xl">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-heading font-bold mb-2">Design Engineer</h3>
              <p class="text-dark/80 dark:text-light/80">
                Design mechanical components and systems using CAD/CAM software.
              </p>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 class="text-xl font-heading font-bold mb-2">Manufacturing Engineer</h3>
              <p class="text-dark/80 dark:text-light/80">
                Optimize manufacturing processes and implement automation solutions.
              </p>
            </div>
            <div class="text-center">
              <div class="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-heading font-bold mb-2">EV Systems Engineer</h3>
              <p class="text-dark/80 dark:text-light/80">
                Design and develop electric vehicle systems and components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CoursesList from '@/components/courses/CoursesList.vue';

export default {
  name: 'MechanicalCoursesView',
  components: {
    CoursesList
  },
  data() {
    return {
      activeCategory: 'all',
      categories: [
        { id: 'all', name: 'All Mechanical Courses' },
        { id: 'engines', name: 'Engines' },
        { id: 'ev', name: 'Electric Vehicles' },
        { id: 'design', name: 'Design' },
        { id: 'manufacturing', name: 'Manufacturing' },
        { id: 'tuning', name: 'Engine Tuning' }
      ],
      mechanicalCourses: [
        {
          id: 'mech-001',
          title: 'Internal Combustion Engines',
          description: 'Comprehensive course on the principles, design, and optimization of internal combustion engines.',
          image: '/images/mechanical/engines.jpg',
          category: 'engines',
          duration: '8 weeks',
          price: 12999,
          rating: 4.8,
          reviewCount: 124,
          enrollments: 1250,
          date: '2023-01-15'
        },
        {
          id: 'mech-002',
          title: 'Electric Vehicle Design',
          description: 'Learn the fundamentals of electric vehicle design, including battery systems, motors, and control systems.',
          image: '/images/mechanical/ev.jpg',
          category: 'ev',
          duration: '10 weeks',
          price: 14999,
          rating: 4.9,
          reviewCount: 98,
          enrollments: 980,
          date: '2023-03-10'
        },
        {
          id: 'mech-003',
          title: 'CAD/CAM for Mechanical Design',
          description: 'Master the use of CAD/CAM software for mechanical design and manufacturing processes.',
          image: '/images/mechanical/design.jpg',
          category: 'design',
          duration: '6 weeks',
          price: 9999,
          rating: 4.7,
          reviewCount: 156,
          enrollments: 1450,
          date: '2023-02-05'
        },
        {
          id: 'mech-004',
          title: 'Advanced Manufacturing Processes',
          description: 'Explore advanced manufacturing techniques including CNC machining, 3D printing, and automation.',
          image: '/images/mechanical/manufacturing.jpg',
          category: 'manufacturing',
          duration: '8 weeks',
          price: 11999,
          rating: 4.6,
          reviewCount: 112,
          enrollments: 890,
          date: '2023-04-20'
        },
        {
          id: 'mech-005',
          title: 'Engine Performance Tuning',
          description: 'Learn how to optimize engine performance through tuning techniques and diagnostics.',
          image: '/images/mechanical/tuning.jpg',
          category: 'tuning',
          duration: '4 weeks',
          price: 7999,
          rating: 4.8,
          reviewCount: 86,
          enrollments: 760,
          date: '2023-05-15'
        },
        {
          id: 'mech-006',
          title: 'Automotive Powertrain Systems',
          description: 'Comprehensive study of automotive powertrain systems including transmission, driveline, and differentials.',
          image: '/images/mechanical/powertrain.jpg',
          category: 'engines',
          duration: '8 weeks',
          price: 12499,
          rating: 4.7,
          reviewCount: 92,
          enrollments: 820,
          date: '2023-06-10'
        },
        {
          id: 'mech-007',
          title: 'EV Battery Management Systems',
          description: 'Specialized course on electric vehicle battery management systems, including design, monitoring, and optimization.',
          image: '/images/mechanical/ev-battery.jpg',
          category: 'ev',
          duration: '6 weeks',
          price: 10999,
          rating: 4.8,
          reviewCount: 78,
          enrollments: 680,
          date: '2023-06-25'
        },
        {
          id: 'mech-008',
          title: '3D Modeling for Mechanical Engineers',
          description: 'Advanced 3D modeling techniques for mechanical engineers using industry-standard software.',
          image: '/images/mechanical/3d-modeling.jpg',
          category: 'design',
          duration: '5 weeks',
          price: 8999,
          rating: 4.7,
          reviewCount: 104,
          enrollments: 920,
          date: '2023-07-15'
        }
      ]
    }
  },
  computed: {
    filteredCourses() {
      return this.mechanicalCourses.filter(course => course.category === this.activeCategory);
    }
  },
  metaInfo: {
    title: 'Mechanical Engineering Courses - AWISSEN',
    meta: [
      { name: 'description', content: 'Explore AWISSEN\'s specialized certification courses in mechanical engineering, including engines, electric vehicles, design, manufacturing, and engine tuning.' },
      { name: 'keywords', content: 'mechanical engineering courses, engine design, electric vehicle design, CAD/CAM, manufacturing processes, engine tuning, AWISSEN certification' }
    ]
  }
}
</script>