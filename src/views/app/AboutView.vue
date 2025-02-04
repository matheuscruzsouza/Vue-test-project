<script setup lang="ts">
import ImedPageTemplate from '@/components/templates/ImedPageTemplate.vue';

</script>

<template>
  <ImedPageTemplate>
    <div class="about">
      <h1>Esta é a página sobre</h1>
    </div>
  </ImedPageTemplate>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
