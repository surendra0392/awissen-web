<template>
  <section class="py-20 bg-light/50 dark:bg-dark/50">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="section-title">About AWISSEN</h2>
          <p class="text-lg mb-6">
            AWISSEN is a premier educational seminar company dedicated to providing high-quality certification courses in the mechanical, ECE, and EEE sectors. Our mission is to bridge the gap between academic knowledge and industry requirements.
          </p>
          <p class="mb-8">
            With a team of experienced industry professionals and educators, we offer practical, hands-on training that prepares students for real-world challenges. Our courses are designed to keep pace with the latest technological advancements and industry trends.
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
            <div class="text-center">
              <div class="text-4xl font-bold text-primary mb-2">500+</div>
              <div class="text-dark/70 dark:text-light/70">Seminars</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary mb-2">10k+</div>
              <div class="text-dark/70 dark:text-light/70">Students</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary mb-2">98%</div>
              <div class="text-dark/70 dark:text-light/70">Satisfaction</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary mb-2">50+</div>
              <div class="text-dark/70 dark:text-light/70">Courses</div>
            </div>
          </div>
          <router-link to="/about" class="btn-primary">
            Learn More About Us
          </router-link>
        </div>
        <div class="relative">
          <div class="glass-card p-1 rounded-2xl overflow-hidden">
            <img src="/images/about-image.jpg" alt="About AWISSEN" class="w-full h-auto rounded-xl" />
          </div>
          <div class="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl max-w-xs">
            <div class="flex items-center mb-4">
              <div class="flex -space-x-2">
                <img src="/images/testimonials/person1.jpg" alt="Student" class="w-10 h-10 rounded-full border-2 border-white" />
                <img src="/images/testimonials/person2.jpg" alt="Student" class="w-10 h-10 rounded-full border-2 border-white" />
                <img src="/images/testimonials/person3.jpg" alt="Student" class="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <div class="ml-4">
                <div class="text-sm text-dark/70 dark:text-light/70">Trusted by</div>
                <div class="font-medium">10,000+ Students</div>
              </div>
            </div>
            <div class="flex">
              <div v-for="i in 5" :key="i" class="text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
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
  name: 'AboutSection'
}
</script>