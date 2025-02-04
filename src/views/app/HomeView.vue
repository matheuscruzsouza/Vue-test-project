<script setup lang="ts">
import ImedPageTemplate from '@/components/templates/ImedPageTemplate.vue';
import TheWelcome from '@/components/TheWelcome.vue';
</script>

<template>
  <ImedPageTemplate>
    <main>
      <TheWelcome />
    </main>
  </ImedPageTemplate>
</template>

<style scoped>
main {
  max-width: 90%;
  margin: auto;
  margin-top: 3rem;
}
</style>