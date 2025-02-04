<script setup lang="ts">
import ImedContent from '../organisms/ImedContent.vue';
</script>

<template>
    <ImedContent>
        <slot></slot>
    </ImedContent>
</template>

<style scoped>
header {
    max-height: 200px;
}

</style>