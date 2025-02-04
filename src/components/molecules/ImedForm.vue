<script setup lang="ts">
import ImedButton from '../atoms/ImedButton.vue';
import ImedInput from '../atoms/ImedInput.vue';
import ImedLabel from '../atoms/ImedLabel.vue';

const noop = () => {}
const onSubmit = () => {}

</script>

<template>
    <form @submit.prevent="onSubmit">
        <ImedLabel htmlFor="email">Email:</ImedLabel>
        <ImedInput id="email" type="email" @input="noop" />
        <ImedButton type="submit" @click="noop">Submit</ImedButton>
    </form>
</template>
