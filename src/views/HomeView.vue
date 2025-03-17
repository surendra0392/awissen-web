<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1470&auto=format&fit=crop" alt="Background" class="w-full h-full object-cover opacity-20" />
        <div class="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary-dark/30"></div>
      </div>
      
      <div class="container-custom relative z-10">
        <div class="flex flex-col md:flex-row items-center">
          <div class="max-w-3xl md:w-3/5">
            <h1 class="text-4xl md:text-6xl font-heading font-bold mb-6">Advance Your Technical Career with AWISSEN</h1>
            <p class="text-xl mb-8">Specialized certification courses and educational seminars in Mechanical, ECE, and EEE sectors to enhance your skills and career prospects.</p>
            <div class="flex flex-wrap gap-4">
              <router-link to="/courses" class="btn-primary">Explore Courses</router-link>
              <a href="#about" class="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition-colors duration-300">Learn More</a>
            </div>
          </div>
          <div class="hidden md:block md:w-2/5 mt-10 md:mt-0">
            <img src="https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png" alt="Engineering Education" class="w-full h-auto max-w-md mx-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Courses -->
    <section class="py-16">
      <div class="container-custom">
        <h2 class="section-title text-center mb-12">Featured Courses</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Mechanical Course -->
          <div class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
            <div class="relative">
              <img src="https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?q=80&w=1364&auto=format&fit=crop" alt="Engine Design" class="w-full h-48 object-cover" />
              <div class="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                Mechanical
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-heading font-bold mb-2">Advanced Engine Design</h3>
              <p class="text-dark/70 dark:text-light/70 mb-4">Comprehensive course on designing, analyzing, and optimizing modern engines for performance and efficiency.</p>
              <div class="flex justify-between items-center">
                <div class="text-xl font-bold text-primary">₹12,999</div>
                <router-link to="/courses/mechanical-1" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300">View Details</router-link>
              </div>
            </div>
          </div>
          
          <!-- ECE Course -->
          <div class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
            <div class="relative">
              <img src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=1470&auto=format&fit=crop" alt="Embedded Systems" class="w-full h-48 object-cover" />
              <div class="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                ECE
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-heading font-bold mb-2">Embedded Systems Design</h3>
              <p class="text-dark/70 dark:text-light/70 mb-4">Master the art of designing and implementing embedded systems for various applications.</p>
              <div class="flex justify-between items-center">
                <div class="text-xl font-bold text-primary">₹10,999</div>
                <router-link to="/courses/ece-1" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300">View Details</router-link>
              </div>
            </div>
          </div>
          
          <!-- EEE Course -->
          <div class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
            <div class="relative">
              <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1470&auto=format&fit=crop" alt="Power Systems" class="w-full h-48 object-cover" />
              <div class="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                EEE
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-heading font-bold mb-2">Power Systems Analysis</h3>
              <p class="text-dark/70 dark:text-light/70 mb-4">Learn advanced techniques for analyzing and optimizing electrical power systems.</p>
              <div class="flex justify-between items-center">
                <div class="text-xl font-bold text-primary">₹11,499</div>
                <router-link to="/courses/eee-1" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300">View Details</router-link>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <router-link to="/courses" class="btn-primary">View All Courses</router-link>
        </div>
      </div>
    </section>
    
    <!-- About Section -->
    <section id="about" class="py-16 bg-light/50 dark:bg-dark/50">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop" alt="About AWISSEN" class="rounded-xl shadow-lg" />
          </div>
          <div>
            <h2 class="section-title">About AWISSEN</h2>
            <p class="mb-4">AWISSEN is a premier educational institution specializing in technical certification courses and seminars for engineering professionals. We focus on providing industry-relevant knowledge and skills to help our students excel in their careers.</p>
            <p class="mb-6">Our courses are designed and delivered by industry experts with extensive experience in their respective fields. We combine theoretical knowledge with practical applications to ensure a comprehensive learning experience.</p>
            
            <!-- Rest of the about section remains unchanged -->
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials -->
    <section class="py-16">
      <div class="container-custom">
        <h2 class="section-title text-center mb-12">What Our Students Say</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="glass-card p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop" alt="Student" class="w-12 h-12 rounded-full mr-4 object-cover" />
              <div>
                <h3 class="font-medium">Rahul Sharma</h3>
                <p class="text-sm text-dark/70 dark:text-light/70">Mechanical Engineer</p>
              </div>
            </div>
            <div class="flex mb-4 text-yellow-500">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p>"The Advanced Engine Design course was exceptional. The instructor's expertise and the practical approach helped me gain valuable skills that I'm now applying in my job. Highly recommended!"</p>
          </div>
          
          <div class="glass-card p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop" alt="Student" class="w-12 h-12 rounded-full mr-4 object-cover" />
              <div>
                <h3 class="font-medium">Priya Patel</h3>
                <p class="text-sm text-dark/70 dark:text-light/70">Electronics Engineer</p>
              </div>
            </div>
            <div class="flex mb-4 text-yellow-500">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p>"AWISSEN's Embedded Systems course provided me with the knowledge and confidence to tackle complex projects. The hands-on approach and industry-relevant content made all the difference in my learning journey."</p>
          </div>
          
          <div class="glass-card p-6 rounded-xl">
            <div class="flex items-center mb-4">
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop" alt="Student" class="w-12 h-12 rounded-full mr-4 object-cover" />
              <div>
                <h3 class="font-medium">Vikram Singh</h3>
                <p class="text-sm text-dark/70 dark:text-light/70">Electrical Engineer</p>
              </div>
            </div>
            <div class="flex mb-4 text-yellow-500">
              <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p>"The Power Systems Analysis course completely transformed my understanding of electrical systems. The instructors are knowledgeable and the course material is comprehensive and up-to-date with industry standards."</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- The rest of the template remains unchanged -->
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  metaInfo: {
    title: 'AWISSEN - Educational Seminars & Certification Courses',
    meta: [
      { name: 'description', content: 'AWISSEN provides industry-leading certification courses in Mechanical, ECE, and EEE sectors. Advance your career with our specialized educational seminars.' },
      { name: 'keywords', content: 'AWISSEN, certification courses, mechanical engineering, ECE, EEE, educational seminars, professional development' }
    ]
  }
}
</script>