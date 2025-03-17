<template>
  <div>
    <!-- Page Header -->
    <section class="relative py-20 bg-primary/10">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-heading font-bold mb-4">Our Courses</h1>
        <p class="text-xl text-dark/70 dark:text-light/70 max-w-3xl">
          Explore our comprehensive range of certification courses in Mechanical, ECE, and EEE sectors.
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
          <courses-list :courses="allCourses" />
        </div>
        <div v-else-if="activeCategory === 'mechanical'">
          <h2 class="section-title mb-8">Mechanical Engineering Courses</h2>
          <courses-list :courses="mechanicalCourses" />
        </div>
        <div v-else-if="activeCategory === 'ece'">
          <h2 class="section-title mb-8">Electronics & Communication Courses</h2>
          <courses-list :courses="eceCourses" />
        </div>
        <div v-else-if="activeCategory === 'eee'">
          <h2 class="section-title mb-8">Electrical & Electronics Courses</h2>
          <courses-list :courses="eeeCourses" />
        </div>
      </div>
    </section>

    <!-- Why Choose Our Courses -->
    <section class="py-16 bg-light/50 dark:bg-dark/50">
      <div class="container-custom">
        <h2 class="section-title text-center mb-12">Why Choose Our Courses</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="glass-card p-8 rounded-xl text-center">
            <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-4">Industry-Relevant Curriculum</h3>
            <p class="text-dark/80 dark:text-light/80">
              Our courses are designed in collaboration with industry experts to ensure that you learn skills that are in demand in the job market.
            </p>
          </div>
          <div class="glass-card p-8 rounded-xl text-center">
            <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-4">Hands-on Learning</h3>
            <p class="text-dark/80 dark:text-light/80">
              Our practical approach ensures that you don't just learn theory but also gain hands-on experience through projects and lab sessions.
            </p>
          </div>
          <div class="glass-card p-8 rounded-xl text-center">
            <div class="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-4">Recognized Certification</h3>
            <p class="text-dark/80 dark:text-light/80">
              Our certifications are recognized by leading companies and institutions, giving you a competitive edge in the job market.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CoursesList from '@/components/courses/CoursesList.vue';

export default {
  name: 'CoursesView',
  components: {
    CoursesList
  },
  data() {
    return {
      activeCategory: 'all',
      categories: [
        { id: 'all', name: 'All Courses' },
        { id: 'mechanical', name: 'Mechanical' },
        { id: 'ece', name: 'ECE' },
        { id: 'eee', name: 'EEE' }
      ],
      allCourses: [
        // Mechanical Courses
        {
          id: 'mech-001',
          title: 'Internal Combustion Engines',
          description: 'Comprehensive course on the principles, design, and optimization of internal combustion engines.',
          image: '/images/mechanical/engines.jpg',
          category: 'mechanical',
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
          category: 'mechanical',
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
          category: 'mechanical',
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
          category: 'mechanical',
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
          category: 'mechanical',
          duration: '4 weeks',
          price: 7999,
          rating: 4.8,
          reviewCount: 86,
          enrollments: 760,
          date: '2023-05-15'
        },
        
        // ECE Courses
        {
          id: 'ece-001',
          title: 'VLSI Design and Verification',
          description: 'Comprehensive course on VLSI design principles, methodologies, and verification techniques.',
          image: '/images/ece/vlsi.jpg',
          category: 'ece',
          duration: '12 weeks',
          price: 15999,
          rating: 4.9,
          reviewCount: 108,
          enrollments: 920,
          date: '2023-01-20'
        },
        {
          id: 'ece-002',
          title: 'Embedded Systems Design',
          description: 'Learn to design and implement embedded systems for various applications.',
          image: '/images/ece/embedded.jpg',
          category: 'ece',
          duration: '10 weeks',
          price: 13999,
          rating: 4.7,
          reviewCount: 132,
          enrollments: 1050,
          date: '2023-02-15'
        },
        {
          id: 'ece-003',
          title: 'Digital Signal Processing',
          description: 'Master the techniques of digital signal processing and its applications in communication systems.',
          image: '/images/ece/dsp.jpg',
          category: 'ece',
          duration: '8 weeks',
          price: 12499,
          rating: 4.6,
          reviewCount: 94,
          enrollments: 820,
          date: '2023-03-25'
        },
        {
          id: 'ece-004',
          title: 'IoT System Design',
          description: 'Comprehensive course on designing Internet of Things systems and applications.',
          image: '/images/ece/iot.jpg',
          category: 'ece',
          duration: '6 weeks',
          price: 10999,
          rating: 4.8,
          reviewCount: 76,
          enrollments: 680,
          date: '2023-04-10'
        },
        
        // EEE Courses
        {
          id: 'eee-001',
          title: 'Power Systems Analysis',
          description: 'Learn the principles of power system analysis, including load flow, stability, and protection.',
          image: '/images/eee/power-systems.jpg',
          category: 'eee',
          duration: '10 weeks',
          price: 13999,
          rating: 4.7,
          reviewCount: 118,
          enrollments: 950,
          date: '2023-01-25'
        },
        {
          id: 'eee-002',
          title: 'Control Systems Engineering',
          description: 'Master the design and analysis of control systems for various engineering applications.',
          image: '/images/eee/control.jpg',
          category: 'eee',
          duration: '8 weeks',
          price: 11999,
          rating: 4.6,
          reviewCount: 104,
          enrollments: 870,
          date: '2023-02-20'
        },
        {
          id: 'eee-003',
          title: 'Electric Drives and Control',
          description: 'Comprehensive course on electric drives and their control systems for industrial applications.',
          image: '/images/eee/drives.jpg',
          category: 'eee',
          duration: '9 weeks',
          price: 12499,
          rating: 4.8,
          reviewCount: 92,
          enrollments: 780,
          date: '2023-03-15'
        },
        {
          id: 'eee-004',
          title: 'Renewable Energy Systems',
          description: 'Learn about various renewable energy systems, their design, and integration with the grid.',
          image: '/images/eee/renewable.jpg',
          category: 'eee',
          duration: '8 weeks',
          price: 12999,
          rating: 4.9,
          reviewCount: 86,
          enrollments: 720,
          date: '2023-04-05'
        }
      ]
    }
  },
  computed: {
    mechanicalCourses() {
      return this.allCourses.filter(course => course.category === 'mechanical');
    },
    eceCourses() {
      return this.allCourses.filter(course => course.category === 'ece');
    },
    eeeCourses() {
      return this.allCourses.filter(course => course.category === 'eee');
    }
  },
  metaInfo: {
    title: 'Courses - AWISSEN Certification Programs',
    meta: [
      { name: 'description', content: 'Explore AWISSEN\'s comprehensive range of certification courses in Mechanical Engineering, Electronics & Communication, and Electrical & Electronics Engineering.' },
      { name: 'keywords', content: 'AWISSEN courses, mechanical engineering courses, ECE courses, EEE courses, certification programs, technical education' }
    ]
  }
}
</script>