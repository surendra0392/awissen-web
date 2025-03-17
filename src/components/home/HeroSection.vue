<template>
  <section class="relative min-h-screen flex items-center py-20">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img src="/images/hero-bg.jpg" alt="AWISSEN Hero Background" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/50"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-light leading-tight mb-6">
            Empower Your Career with <span class="text-primary">Industry-Leading</span> Certifications
          </h1>
          <p class="text-xl text-light/90 mb-8">
            Join AWISSEN's specialized courses in Mechanical, ECE, and EEE sectors to gain practical knowledge and advance your professional journey.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/courses" class="btn-primary">
              Explore Courses
            </router-link>
            <router-link to="/contact" class="px-6 py-3 bg-transparent border-2 border-light text-light hover:bg-light/10 font-medium rounded-lg transition-all duration-300">
              Contact Us
            </router-link>
          </div>
        </div>
        <div class="hidden lg:block">
          <div class="glass-card p-8 rounded-2xl">
            <h3 class="text-2xl font-heading font-bold text-light mb-6">Featured Courses</h3>
            <div class="space-y-4">
              <div v-for="(course, index) in featuredCourses" :key="index" class="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer">
                <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <img :src="course.icon" :alt="course.title" class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="font-medium text-light">{{ course.title }}</h4>
                  <p class="text-sm text-light/70">{{ course.category }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      featuredCourses: [
        {
          title: 'Electric Vehicle Design',
          category: 'Mechanical',
          icon: '/images/mechanical/ev-icon.png'
        },
        {
          title: 'VLSI Design',
          category: 'ECE',
          icon: '/images/ece/vlsi-icon.png'
        },
        {
          title: 'Power Systems',
          category: 'EEE',
          icon: '/images/eee/power-icon.png'
        }
      ]
    }
  }
}
</script>