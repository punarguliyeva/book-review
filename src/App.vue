<template>
  <div>
    <Navigation />
    <div class="wrapper">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useBookStore } from './stores/Books'
import Navigation from '@/components/Navigation.vue'

const store = useBookStore()

onMounted(() => {
  store.getFromLocalStorage()
})
</script>

<style lang="scss">
body {
  margin: 0;
  background: linear-gradient(
    90deg,
    rgba(62, 58, 180, 0.3) 0%,
    rgba(253, 175, 29, 0.3) 50%,
    rgba(240, 200, 144, 0.3) 100%
  );

  .wrapper {
    margin: 12px;
  }
}
</style>
