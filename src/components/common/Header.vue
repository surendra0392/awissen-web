<template>
  <header class="fixed top-0 left-0 right-0 z-50">
    <div class="glass-card mx-4 my-4 md:mx-8">
      <div class="container-custom py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <router-link to="/" class="flex items-center space-x-2">
            <img src="/images/logo.png" alt="AWISSEN Logo" class="h-10" />
            <span class="text-xl font-heading font-bold text-primary">AWISSEN</span>
          </router-link>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center space-x-6">
            <router-link v-for="item in navItems" :key="item.path" :to="item.path"
              class="font-medium hover:text-primary transition-colors duration-300"
              :class="{ 'text-primary': isActive(item.path) }">
              {{ item.name }}
            </router-link>
            <router-link to="/login" class="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
              Login
            </router-link>
            <router-link to="/register" class="btn-primary">
              Register
            </router-link>
          </nav>

          <!-- Mobile Menu Button -->
          <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-dark dark:text-light">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="isMenuOpen" class="glass-card mx-4 mt-1 md:hidden">
      <div class="py-4 px-6">
        <nav class="flex flex-col space-y-4">
          <router-link v-for="item in navItems" :key="item.path" :to="item.path"
            class="font-medium hover:text-primary transition-colors duration-300"
            :class="{ 'text-primary': isActive(item.path) }"
            @click="isMenuOpen = false">
            {{ item.name }}
          </router-link>
          <div class="flex space-x-4 pt-2">
            <router-link to="/login" class="flex-1 px-4 py-2 text-center border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
              Login
            </router-link>
            <router-link to="/register" class="flex-1 px-4 py-2 text-center bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300">
              Register
            </router-link>
          </div>
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
      isMenuOpen: false,
      navItems: [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Certification', path: '/certification' },
        { name: 'Contact', path: '/contact' },
      ]
    }
  },
  methods: {
    isActive(path) {
      return this.$route.path === path;
    }
  }
}
</script>