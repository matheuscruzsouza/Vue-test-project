<script setup lang="ts">
import ImedForm from '../molecules/ImedForm.vue';

const onSubmit = (e: any) => {
    console.log(e);
}
</script>

<template>
    <main>
        <slot></slot>
        <ImedForm @submit="onSubmit" />
    </main>
</template>