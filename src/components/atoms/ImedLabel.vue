<script setup lang="ts">
defineProps<{
    htmlFor: string
}>()
</script>

<template>
    <label :for="htmlFor"><slot></slot></label>
</template>