<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div v-for="course in courses" :key="course.id" class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
      <div class="relative">
        <img :src="course.image" :alt="course.title" class="w-full h-48 object-cover" />
        <div class="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
          {{ course.category }}
        </div>
      </div>
      <div class="p-6">
        <h3 class="text-xl font-heading font-bold mb-2">{{ course.title }}</h3>
        <p class="text-dark/70 dark:text-light/70 mb-4 line-clamp-2">{{ course.description }}</p>
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-sm">{{ course.duration }}</span>
          </div>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="text-sm">{{ course.enrollments }}+ enrolled</span>
          </div>
        </div>
        <div class="flex items-center mb-4">
          <div class="flex items-center mr-2">
            <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" :class="['h-4 w-4', i <= Math.floor(course.rating) ? 'text-yellow-500' : 'text-gray-300']" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span class="text-sm font-medium">{{ course.rating }} ({{ course.reviewCount }} reviews)</span>
        </div>
        <div class="flex justify-between items-center">
          <div class="text-xl font-bold text-primary">₹{{ course.price.toLocaleString() }}</div>
          <router-link :to="`/courses/${course.id}`" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300">View Details</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoursesList',
  props: {
    courses: {
      type: Array,
      required: true
    }
  }
}
</script>