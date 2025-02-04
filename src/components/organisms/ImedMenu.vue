<script setup lang="ts">
import ImedNavMenu from '../atoms/ImedNavMenu.vue';

const menu = [
{
    name: 'Home',
    path: '/'
},
{
    name: 'Dashboard',
    path: '/dashboard'
},
{
    name: 'Form',
    path: '/form'
},
{
    name: 'Sobre',
    path: '/about'
}
]

</script>

<template>
    <nav> <ImedNavMenu :items="menu" /> </nav>
</template>

<style scoped>
    nav {
        min-width: 100px;
        box-shadow: 0px 4px 9px 0px #f1f1f1;
    }

    ul {
        list-style-type: none;
        padding-inline-start: unset;
        padding: 10px 0;
    }
</style>