<template>
  <section class="py-20">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="section-title">Our Specialized Courses</h2>
        <p class="text-lg text-dark/70 dark:text-light/70 max-w-3xl mx-auto">
          Explore our comprehensive range of certification courses designed to equip you with industry-relevant skills and knowledge.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(category, index) in courseCategories" :key="index" 
             class="glass-card overflow-hidden group hover:shadow-xl transition-all duration-300">
          <div class="relative h-64 overflow-hidden">
            <img :src="category.image" :alt="category.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
            <h3 class="absolute bottom-4 left-6 text-2xl font-heading font-bold text-light">{{ category.title }}</h3>
          </div>
          <div class="p-6">
            <p class="text-dark/80 dark:text-light/80 mb-6">{{ category.description }}</p>
            <ul class="space-y-2 mb-6">
              <li v-for="(course, courseIndex) in category.courses" :key="courseIndex" class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span>{{ course }}</span>
              </li>
            </ul>
            <router-link :to="category.link" class="inline-block px-5 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300">
              View All Courses
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CoursesGrid',
  data() {
    return {
      courseCategories: [
        {
          title: 'Mechanical Engineering',
          image: '/images/mechanical/mechanical-main.jpg',
          description: 'Comprehensive courses covering various aspects of mechanical engineering, from engine design to manufacturing processes.',
          courses: ['Engines', 'Electric Vehicles', 'Design', 'Manufacturing', 'Engine Tuning'],
          link: '/courses/mechanical'
        },
        {
          title: 'Electronics & Communication',
          image: '/images/ece/ece-main.jpg',
          description: 'Specialized courses in electronics and communication engineering to help you excel in the rapidly evolving tech industry.',
          courses: ['VLSI Design', 'Embedded Systems', 'Signal Processing', 'Communication Systems', 'IoT'],
          link: '/courses/ece'
        },
        {
          title: 'Electrical & Electronics',
          image: '/images/eee/eee-main.jpg',
          description: 'Expert-led courses in electrical and electronics engineering focusing on power systems, control systems, and more.',
          courses: ['Power Systems', 'Control Systems', 'Electric Drives', 'Power Electronics', 'Renewable Energy'],
          link: '/courses/eee'
        }
      ]
    }
  }
}
</script>