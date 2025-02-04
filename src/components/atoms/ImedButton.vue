<script setup lang="ts">
defineProps<{
    type: 'button' | 'submit',
}>()

const onClick = () => {}
</script>

<template>
    <button :type="type" @click="onClick"><slot></slot></button>
</template>

<style scoped>
    button {
        padding: 0.5em 0.8em;
        margin: 10px;
        border: 1px solid black;
        border-radius: 25px;
        background-color: #ff0055;
        color: #fff;
        font-weight: bold;
        border-color: #ff0055;
    }

    button:hover {
        background-color: #d90048;
        border-color: #d90048;
    }

    button:active {
        background-color: #b3013d;
        border-color: #b3013d;
    }
</style>