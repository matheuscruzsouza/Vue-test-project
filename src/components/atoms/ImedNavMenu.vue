<script setup lang="ts">
defineProps<{
    items: any[]
}>()
</script>

<template>
    <ul>
        <li v-for="(item, index) in items" :key="index">
            <RouterLink :to="item.path">{{item.name}}</RouterLink>
        </li>
    </ul>
</template>

<style scoped>
a {
    border-left: 5px solid transparent;
}

a:hover {
    background-color: unset !important;
}

li:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
}

.router-link-active, .router-link-exact-active {
    border-left-color: hsla(160, 100%, 37%, 1);
}
</style>
