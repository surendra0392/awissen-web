<template>
  <header class="sticky top-0 z-50 bg-light/80 dark:bg-dark/80 backdrop-blur-lg border-b border-white/10 transition-colors duration-300">
    <div class="container-custom">
      <div class="flex items-center justify-between py-4">
        <!-- Logo -->
        <router-link to="/" class="flex items-center">
          <img src="/images/logo.png" alt="AWISSEN Logo" class="h-10 mr-3" />
          <span class="text-2xl font-heading font-bold">AWISSEN</span>
        </router-link>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          class="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
        >
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-1">
          <router-link 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            class="px-4 py-2 rounded-lg transition-colors duration-300"
            :class="$route.path === item.path ? 'bg-primary text-white' : 'hover:bg-white/10'"
          >
            {{ item.name }}
          </router-link>
          <button @click="toggleTheme" class="p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 ml-2">
            <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </nav>
      </div>

      <!-- Mobile Navigation -->
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden py-4 border-t border-white/10"
      >
        <nav class="flex flex-col space-y-2">
          <router-link 
            v-for="item in navItems" 
            :key="item.path" 
            :to="item.path"
            class="px-4 py-2 rounded-lg transition-colors duration-300"
            :class="$route.path === item.path ? 'bg-primary text-white' : 'hover:bg-white/10'"
            @click="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
          <button @click="toggleTheme" class="flex items-center px-4 py-2 rounded-lg hover:bg-white/10 transition-colors duration-300">
            <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
          </button>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMobileMenuOpen: false,
      isDarkMode: false,
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Certification', path: '/certification' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  },
  mounted() {
    // Check for saved theme preference or use user's system preference
    const savedTheme = localStorage.getItem('theme');
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && userPrefersDark)) {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    }
  },
  methods: {
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}
</script>