<template>
  <AppLayout>
    <RouterView></RouterView>
  </AppLayout>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppLayout from './components/AppLayout.vue';

</script>

<style>
#app {
  @apply antialiased flex flex-col items-center mt-4 text-gray-900;
}

body {
  @apply p-0 m-0;
}
</style>
