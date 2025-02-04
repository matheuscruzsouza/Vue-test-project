<script setup lang="ts">
import ImedSearch from '../atoms/ImedSearch.vue';

const noop = () => {}

</script>

<template>
    <header>
        <img src="https://cdn.imedicina.com.br/app/logo-imed.png" alt="iMedicina">
        <ImedSearch @input="noop" />
    </header>
</template>

<style scoped>
    header {
        height: 50px;

        position: sticky;
        top: 0;

        background-color: #fff;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        box-shadow: 0px 4px 9px 0px #f1f1f1;
    }

    header img {
        height: 50px;
        padding: 1px 20px;
    }
</style>
