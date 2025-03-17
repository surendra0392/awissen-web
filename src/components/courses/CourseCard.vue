<template>
  <div class="glass-card overflow-hidden group hover:shadow-xl transition-all duration-300">
    <div class="relative h-48 overflow-hidden">
      <img :src="course.image" :alt="course.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div class="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
      <div class="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
        {{ course.duration }}
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-heading font-bold mb-2">{{ course.title }}</h3>
      <p class="text-dark/80 dark:text-light/80 mb-4 line-clamp-2">{{ course.description }}</p>
      <div class="flex items-center mb-4">
        <div class="flex mr-2">
          <div v-for="i in 5" :key="i" :class="i <= course.rating ? 'text-yellow-400' : 'text-gray-300'">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        <span class="text-sm text-dark/60 dark:text-light/60">({{ course.reviewCount }} reviews)</span>
      </div>
      <div class="flex items-center justify-between">
        <div class="text-primary font-bold text-xl">₹{{ course.price }}</div>
        <router-link :to="`/courses/${course.id}`" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300">
          View Details
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    course: {
      type: Object,
      required: true
    }
  }
}
</script>