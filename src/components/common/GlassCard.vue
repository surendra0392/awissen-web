<template>
  <div class="glass-card p-6" :class="customClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GlassCard',
  props: {
    customClass: {
      type: String,
      default: ''
    }
  }
}
</script>