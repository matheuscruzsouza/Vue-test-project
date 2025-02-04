<script setup lang="ts">
defineProps<{
    id: string,
    type: string,
    value?: string
}>()

const onChange = () => {}

</script>

<template>
    <input :id="id" :type="type" @input="onChange" :value="value" />
</template>
