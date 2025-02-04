<script setup lang="ts">
import ImedHeader from '../organisms/ImedHeader.vue';
import ImedMenu from '../organisms/ImedMenu.vue';

</script>

<template>
    <ImedHeader />
    <main>
        <ImedMenu />
        <div class="content-wrapper">
            <slot></slot>
        </div>
    </main>
</template>

<style scoped>

main {
    display: grid;
    grid-template-columns: auto 1fr;
}

.content-wrapper {
    padding: 10px;
}

</style>