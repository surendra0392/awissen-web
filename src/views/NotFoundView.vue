<template>
  <div class="min-h-screen flex items-center justify-center py-20">
    <div class="container-custom text-center">
      <div class="glass-card p-12 rounded-xl max-w-2xl mx-auto">
        <h1 class="text-6xl font-heading font-bold mb-6">404</h1>
        <h2 class="text-2xl font-heading font-bold mb-4">Page Not Found</h2>
        <p class="text-dark/80 dark:text-light/80 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <router-link to="/" class="btn-primary">
          Return to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>