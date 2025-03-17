<template>
  <section class="py-20">
    <div class="container-custom">
      <div class="text-center mb-16">
        <h2 class="section-title">What Our Students Say</h2>
        <p class="text-lg text-dark/70 dark:text-light/70 max-w-3xl mx-auto">
          Hear from our students about how AWISSEN's certification courses have helped them advance in their careers.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="glass-card p-8 rounded-xl">
          <div class="flex items-center mb-6">
            <img :src="testimonial.image" :alt="testimonial.name" class="w-14 h-14 rounded-full mr-4" />
            <div>
              <h4 class="font-medium text-lg">{{ testimonial.name }}</h4>
              <p class="text-dark/70 dark:text-light/70 text-sm">{{ testimonial.role }}</p>
            </div>
          </div>
          <div class="flex mb-4">
            <div v-for="i in 5" :key="i" class="text-yellow-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <p class="text-dark/80 dark:text-light/80">{{ testimonial.text }}</p>
          <p class="mt-4 text-sm text-dark/60 dark:text-light/60">{{ testimonial.course }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: [
        {
          name: 'Rahul Sharma',
          role: 'Mechanical Engineer',
          image: '/images/testimonials/person1.jpg',
          text: 'The Electric Vehicle Design course at AWISSEN was exactly what I needed to transition into the EV industry. The hands-on approach and industry-relevant curriculum helped me secure a position at a leading automotive company.',
          course: 'Electric Vehicle Design'
        },
        {
          name: 'Priya Patel',
          role: 'ECE Student',
          image: '/images/testimonials/person2.jpg',
          text: 'AWISSEN\'s VLSI Design certification gave me a competitive edge in the job market. The instructors were knowledgeable and the practical sessions were invaluable. Highly recommended for anyone looking to specialize in this field.',
          course: 'VLSI Design'
        },
        {
          name: 'Arun Kumar',
          role: 'Power Systems Engineer',
          image: '/images/testimonials/person3.jpg',
          text: 'The Power Systems course exceeded my expectations. The curriculum was comprehensive and up-to-date with the latest industry standards. The certification has been instrumental in my career advancement.',
          course: 'Power Systems'
        }
      ]
    }
  }
}
</script>