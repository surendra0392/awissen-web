<template>
  <div v-if="course">
    <!-- Course Header -->
    <section class="relative py-20 bg-primary/10">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="mb-4">
              <span class="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">{{ course.category }}</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-heading font-bold mb-4">{{ course.title }}</h1>
            <p class="text-xl text-dark/70 dark:text-light/70 mb-6">{{ course.description }}</p>
            <div class="flex flex-wrap items-center gap-6 mb-8">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{{ course.duration }}</span>
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <span>{{ courseLevel }}</span>
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>{{ course.enrollments }}+ students</span>
              </div>
              <div class="flex items-center">
                <div class="flex items-center mr-2">
                  <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" :class="['h-4 w-4', i <= Math.floor(course.rating) ? 'text-yellow-500' : 'text-gray-300']" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span>{{ course.rating }} ({{ course.reviewCount }} reviews)</span>
              </div>
            </div>
            <div class="flex flex-wrap gap-4">
              <button class="btn-primary">Enroll Now</button>
              <button class="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-colors duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share Course
              </button>
            </div>
          </div>
          <div class="glass-card p-1 rounded-xl overflow-hidden">
            <img :src="course.image" :alt="course.title" class="w-full h-auto rounded-xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- Course Content -->
    <section class="py-16">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <!-- Tabs -->
            <div class="mb-8 border-b border-white/10">
              <div class="flex flex-wrap -mb-px">
                <button 
                  v-for="tab in tabs" 
                  :key="tab.id"
                  @click="activeTab = tab.id"
                  class="px-6 py-3 font-medium border-b-2 transition-colors duration-300"
                  :class="activeTab === tab.id ? 'border-primary text-primary' : 'border-transparent hover:border-white/20'"
                >
                  {{ tab.name }}
                </button>
              </div>
            </div>

            <!-- Tab Content -->
            <div v-if="activeTab === 'overview'" class="space-y-8">
              <div>
                <h2 class="text-2xl font-heading font-bold mb-4">Course Overview</h2>
                <p class="mb-4">
                  This comprehensive course on {{ course.title }} is designed to provide you with both theoretical knowledge and practical skills that are in high demand in the industry. Whether you're a student looking to enhance your skills or a professional aiming to upskill, this course offers valuable insights and hands-on experience.
                </p>
                <p>
                  The course is structured to progressively build your understanding, starting from the fundamentals and advancing to complex concepts and applications. By the end of this course, you will have gained the expertise needed to excel in your career and stand out in the competitive job market.
                </p>
              </div>

              <div>
                <h2 class="text-2xl font-heading font-bold mb-4">What You'll Learn</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div v-for="(item, index) in learningOutcomes" :key="index" class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 class="text-2xl font-heading font-bold mb-4">Course Requirements</h2>
                <ul class="space-y-2">
                  <li v-for="(item, index) in requirements" :key="index" class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div v-else-if="activeTab === 'curriculum'" class="space-y-8">
              <h2 class="text-2xl font-heading font-bold mb-4">Course Curriculum</h2>
              <div v-for="(module, index) in curriculum" :key="index" class="glass-card rounded-xl overflow-hidden mb-4">
                <div class="p-4 bg-primary/10 flex justify-between items-center cursor-pointer" @click="module.isOpen = !module.isOpen">
                  <h3 class="font-medium">Module {{ index + 1 }}: {{ module.title }}</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transition-transform duration-300" :class="module.isOpen ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div v-if="module.isOpen" class="p-4 border-t border-white/10">
                  <ul class="space-y-4">
                    <li v-for="(lesson, lessonIndex) in module.lessons" :key="lessonIndex" class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div class="font-medium">{{ lesson.title }}</div>
                        <div class="text-sm text-dark/70 dark:text-light/70">{{ lesson.duration }}</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div v-else-if="activeTab === 'instructor'" class="space-y-8">
              <h2 class="text-2xl font-heading font-bold mb-4">Meet Your Instructor</h2>
              <div class="glass-card p-6 rounded-xl">
                <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <img src="/images/instructor.jpg" alt="Instructor" class="w-32 h-32 rounded-full object-cover" />
                  <div>
                    <h3 class="text-xl font-bold mb-2">Dr. Rajesh Kumar</h3>
                    <p class="text-primary mb-2">Senior Technical Expert with 15+ years of experience</p>
                    <div class="flex items-center mb-4">
                      <div class="flex items-center mr-2">
                        <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" :class="['h-4 w-4', i <= 5 ? 'text-yellow-500' : 'text-gray-300']" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span>4.9 Instructor Rating</span>
                    </div>
                    <p class="mb-4">
                      Dr. Rajesh Kumar is a renowned expert in the field with over 15 years of industry and academic experience. He has worked with leading companies and has been instrumental in developing innovative solutions in the domain.
                    </p>
                    <p>
                      His teaching methodology combines theoretical concepts with practical applications, ensuring that students gain a comprehensive understanding of the subject matter. Dr. Kumar is passionate about sharing his knowledge and helping students achieve their career goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div v-else-if="activeTab === 'reviews'" class="space-y-8">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-heading font-bold">Student Reviews</h2>
                <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300">Write a Review</button>
              </div>
              
              <div class="glass-card p-6 rounded-xl mb-6">
                <div class="flex items-center mb-4">
                  <div class="flex items-center mr-4">
                    <div class="text-4xl font-bold mr-2">{{ course.rating }}</div>
                    <div>
                      <div class="flex">
                        <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" :class="['h-5 w-5', i <= Math.floor(course.rating) ? 'text-yellow-500' : 'text-gray-300']" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <div class="text-sm">{{ course.reviewCount }} reviews</div>
                    </div>
                  </div>
                  <div class="flex-1">
                    <div v-for="i in 5" :key="i" class="flex items-center mb-1">
                      <div class="text-sm mr-2">{{ 6 - i }} stars</div>
                      <div class="flex-1 bg-white/10 rounded-full h-2 mr-2">
                        <div class="bg-primary h-2 rounded-full" :style="`width: ${getRandomRatingPercentage(6 - i)}%`"></div>
                      </div>
                      <div class="text-sm">{{ getRandomRatingCount(6 - i) }}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div v-for="(review, index) in reviews" :key="index" class="glass-card p-6 rounded-xl mb-4">
                <div class="flex items-start mb-4">
                  <img :src="review.avatar" :alt="review.name" class="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 class="font-medium">{{ review.name }}</h3>
                    <div class="flex items-center">
                      <div class="flex mr-2">
                        <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" :class="['h-4 w-4', i <= review.rating ? 'text-yellow-500' : 'text-gray-300']" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span class="text-sm text-dark/70 dark:text-light/70">{{ review.date }}</span>
                    </div>
                  </div>
                </div>
                <p>{{ review.comment }}</p>
              </div>
              
              <div class="text-center">
                <button class="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-colors duration-300">
                  Load More Reviews
                </button>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div>
            <div class="glass-card p-6 rounded-xl sticky top-24">
              <div class="text-3xl font-bold mb-4">₹{{ course.price.toLocaleString() }}</div>
              <button class="btn-primary w-full mb-4">Enroll Now</button>
              <button class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-colors duration-300 mb-6">Add to Wishlist</button>
              
              <div class="mb-6">
                <h3 class="font-medium mb-2">This course includes:</h3>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>40+ hours of video content</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Comprehensive course materials</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Lifetime access</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span>Certification upon completion</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <span>24/7 support</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-medium mb-2">Share this course:</h3>
                <div class="flex space-x-4">
                  <a href="#" class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div>
            <div class="glass-card p-6 rounded-xl sticky top-24">
              <div class="text-3xl font-bold mb-4">₹{{ course.price.toLocaleString() }}</div>
              <button class="btn-primary w-full mb-4">Enroll Now</button>
              <button class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-colors duration-300 mb-6">Add to Wishlist</button>
              
              <div class="mb-6">
                <h3 class="font-medium mb-2">This course includes:</h3>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>40+ hours of video content</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Comprehensive course materials</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Lifetime access</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span>Certification upon completion</span>
                  </li>
                  <li class="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    <span>24/7 support</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 class="font-medium mb-2">Share this course:</h3>
                <div class="flex space-x-4">
                  <a href="#" class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" class="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Courses -->
    <section class="py-16 bg-light/50 dark:bg-dark/50">
      <div class="container-custom">
        <h2 class="section-title text-center mb-12">Related Courses</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(relatedCourse, index) in relatedCourses" :key="index" class="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105">
            <div class="relative">
              <img :src="relatedCourse.image" :alt="relatedCourse.title" class="w-full h-48 object-cover" />
              <div class="absolute top-4 right-4 bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
                {{ relatedCourse.category }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-heading font-bold mb-2">{{ relatedCourse.title }}</h3>
              <p class="text-dark/70 dark:text-light/70 mb-4 line-clamp-2">{{ relatedCourse.description }}</p>
              <div class="flex justify-between items-center">
                <div class="text-xl font-bold text-primary">₹{{ relatedCourse.price.toLocaleString() }}</div>
                <router-link :to="`/courses/${relatedCourse.id}`" class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-300">View Details</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <div class="mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary mx-auto animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </div>
      <p class="text-xl">Loading course details...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseDetailView',
  data() {
    return {
      course: null,
      activeTab: 'overview',
      tabs: [
        { id: 'overview', name: 'Overview' },
        { id: 'curriculum', name: 'Curriculum' },
        { id: 'instructor', name: 'Instructor' },
        { id: 'reviews', name: 'Reviews' }
      ],
      learningOutcomes: [
        'Understand the fundamental principles and concepts related to the course topic',
        'Apply theoretical knowledge to solve real-world problems and challenges',
        'Develop practical skills through hands-on exercises and projects',
        'Learn industry best practices and standards',
        'Gain expertise in using relevant tools and technologies',
        'Analyze complex systems and implement efficient solutions',
        'Design and develop innovative solutions for industry challenges',
        'Evaluate different approaches and select the most appropriate one'
      ],
      requirements: [
        'Basic understanding of engineering principles',
        'Familiarity with fundamental concepts in the relevant field',
        'Access to a computer with internet connection',
        'Willingness to learn and practice regularly',
        'No prior experience with advanced concepts is required'
      ],
      curriculum: [
        {
          title: 'Introduction and Fundamentals',
          isOpen: true,
          lessons: [
            { title: 'Course Overview and Introduction', duration: '15 min' },
            { title: 'Understanding Basic Principles', duration: '45 min' },
            { title: 'Key Concepts and Terminology', duration: '30 min' },
            { title: 'Historical Development and Evolution', duration: '40 min' },
            { title: 'Module Assessment Quiz', duration: '20 min' }
          ]
        },
        {
          title: 'Core Concepts and Techniques',
          isOpen: false,
          lessons: [
            { title: 'Advanced Theoretical Framework', duration: '60 min' },
            { title: 'Practical Applications and Examples', duration: '75 min' },
            { title: 'Problem-Solving Methodologies', duration: '50 min' },
            { title: 'Case Studies and Analysis', duration: '65 min' },
            { title: 'Hands-on Exercise', duration: '90 min' },
            { title: 'Module Assessment Quiz', duration: '25 min' }
          ]
        },
        {
          title: 'Advanced Topics and Applications',
          isOpen: false,
          lessons: [
            { title: 'Cutting-Edge Developments', duration: '55 min' },
            { title: 'Industry Applications and Use Cases', duration: '70 min' },
            { title: 'Integration with Other Systems', duration: '60 min' },
            { title: 'Optimization Techniques', duration: '50 min' },
            { title: 'Advanced Problem-Solving Workshop', duration: '120 min' },
            { title: 'Module Assessment Quiz', duration: '30 min' }
          ]
        },
        {
          title: 'Project Implementation',
          isOpen: false,
          lessons: [
            { title: 'Project Planning and Requirements', duration: '45 min' },
            { title: 'Design and Architecture', duration: '60 min' },
            { title: 'Implementation Guidelines', duration: '75 min' },
            { title: 'Testing and Validation', duration: '50 min' },
            { title: 'Project Presentation and Review', duration: '90 min' },
            { title: 'Final Assessment', duration: '60 min' }
          ]
        }
      ],
      reviews: [
        {
          name: 'Priya Sharma',
          avatar: '/images/avatars/avatar-1.jpg',
          rating: 5,
          date: '2 months ago',
          comment: 'This course exceeded my expectations. The instructor explains complex concepts in a simple and understandable manner. The practical exercises helped me apply what I learned immediately in my work. Highly recommended!'
        },
        {
          name: 'Rahul Verma',
          avatar: '/images/avatars/avatar-2.jpg',
          rating: 4,
          date: '3 months ago',
          comment: 'Great course with comprehensive content. The instructor is knowledgeable and responsive to questions. I particularly enjoyed the hands-on projects. The only improvement could be more real-world examples.'
        },
        {
          name: 'Ananya Patel',
          avatar: '/images/avatars/avatar-3.jpg',
          rating: 5,
          date: '1 month ago',
          comment: 'Excellent course that helped me advance my career. The curriculum is well-structured and builds progressively from basic to advanced concepts. The instructor\'s expertise is evident throughout the course.'
        }
      ],
      relatedCourses: [
        {
          id: 'related-1',
          title: 'Advanced Manufacturing Processes',
          description: 'Learn cutting-edge manufacturing techniques and processes used in modern industry.',
          image: '/images/mechanical/manufacturing.jpg',
          category: 'manufacturing',
          price: 9999,
          rating: 4.7
        },
        {
          id: 'related-2',
          title: 'Automotive Engine Design',
          description: 'Comprehensive course on designing efficient and powerful automotive engines.',
          image: '/images/mechanical/engine-design.jpg',
          category: 'automotive',
          price: 12999,
          rating: 4.9
        },
        {
          id: 'related-3',
          title: 'Robotics and Automation',
          description: 'Explore the world of industrial robotics and automation systems.',
          image: '/images/mechanical/robotics.jpg',
          category: 'robotics',
          price: 11999,
          rating: 4.8
        }
      ]
    }
  },
  computed: {
    courseLevel() {
      // This would typically be determined by the course data
      // For now, we'll return a fixed value
      return 'Intermediate';
    }
  },
  methods: {
    getRandomRatingPercentage(stars) {
      // Generate random percentages for the rating bars
      // In a real application, this would be calculated from actual review data
      const percentages = {
        5: 70,
        4: 20,
        3: 7,
        2: 2,
        1: 1
      };
      return percentages[stars] || 0;
    },
    getRandomRatingCount(stars) {
      // Generate random counts for each star rating
      // In a real application, this would be calculated from actual review data
      const total = this.course.reviewCount;
      const percentages = {
        5: 0.7,
        4: 0.2,
        3: 0.07,
        2: 0.02,
        1: 0.01
      };
      return Math.round(total * (percentages[stars] || 0));
    },
    fetchCourseDetails() {
      // In a real application, this would fetch data from an API
      // For now, we'll simulate a course based on the route parameter
      
      // Simulate API delay
      setTimeout(() => {
        // Sample course data
        const courseId = this.$route.params.id;
        
        // This would typically come from an API
        this.course = {
          id: courseId,
          title: 'Advanced Engine Design and Optimization',
          description: 'Comprehensive course on designing, analyzing, and optimizing modern engines for performance, efficiency, and emissions compliance.',
          image: '/images/mechanical/engine-design.jpg',
          category: 'automotive',
          duration: '8 weeks',
          price: 12999,
          rating: 4.8,
          reviewCount: 156,
          enrollments: 1240,
          date: '2023-05-10'
        };
      }, 1000);
    }
  },
  created() {
    this.fetchCourseDetails();
  },
  metaInfo() {
    return {
      title: this.course ? `${this.course.title} - AWISSEN` : 'Course Details - AWISSEN',
      meta: [
        { 
          name: 'description', 
          content: this.course ? this.course.description : 'Detailed information about AWISSEN certification courses.'
        }
      ]
    };
  }
}
</script>