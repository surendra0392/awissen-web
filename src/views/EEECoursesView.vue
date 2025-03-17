<template>
  <div>
    <section class="py-20 bg-primary/10">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-heading font-bold mb-6">Electrical & Electronics Engineering Courses</h1>
        <p class="text-xl text-dark/70 dark:text-light/70 max-w-3xl">
          Explore our comprehensive range of certification courses in Electrical & Electronics Engineering designed to enhance your skills and advance your career.
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="container-custom">
        <div class="mb-12">
          <h2 class="section-title">Available Courses</h2>
          <p class="text-dark/70 dark:text-light/70 max-w-3xl">
            Our EEE courses are designed by industry experts to provide you with practical knowledge and skills that are in high demand.
          </p>
        </div>
        
        <!-- Courses list will be populated here -->
        <p class="text-center text-dark/70 dark:text-light/70">Loading courses...</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'EEECoursesView',
  metaInfo: {
    title: 'Electrical & Electronics Courses - AWISSEN',
    meta: [
      { name: 'description', content: 'Explore AWISSEN\'s Electrical & Electronics Engineering certification courses designed to enhance your technical skills and career prospects.' }
    ]
  }
}
</script>